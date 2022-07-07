import { handleUnaryCall, sendUnaryData, ServerUnaryCall, status, UntypedHandleCall } from "@grpc/grpc-js";
import {
    AddExpenditureRequest,
    AddExpenditureResponse,
    GetExpenditureRequest,
    GetExpenditureResponse,
    Data,
    Str,
    ListByUsersReq
} from "../proto_models/expenditure_pb";

import { GetSurveysRequest, GetSurveysResponse, UncompletedSurveys, NewSurveys, FullQuotaSurveys } from "../models/questionary_service_pb";
import { getAllCategories } from "../client/QuestionaryService";


import ResponseModel, { IResponce } from "../../models/Response";


import BonusStorage from "../../storage/mongo/Bonus";
import logger from "../../config/logger";

import { ListValue } from "google-protobuf/google/protobuf/struct_pb";
import { IExpenditureServer, ExpenditureService } from "../proto_models/expenditure_grpc_pb";
import { ServiceError } from "../../lib/grpc/serviceError";
import ExpenditureModel from "../../models/Expenditure";
import ResponseStorage from "../../storage/mongo/Response";
import { any, date, string } from "joi";

const bonusStorage = new BonusStorage();

const responseStorage = new ResponseStorage();

class Expenditure implements IExpenditureServer {
    [method: string]: UntypedHandleCall;

    async getExpenditure(
        call: ServerUnaryCall<GetExpenditureRequest, GetExpenditureResponse>,
        callback: sendUnaryData<GetExpenditureResponse>
    ): Promise<void> {
        const res: GetExpenditureResponse = new GetExpenditureResponse();
        try {
            const user_id = call.request.getUserId();
            let uncompleted_surveys: any = [];
            let allExpenditure: any = [];
             allExpenditure  = await ExpenditureModel.find({
                user_id: user_id,
            }).sort({ started_at: "desc" });
            res.setExpenditureList(allExpenditure);
            callback(null, res);
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }

    async getPortrait(
        call: ServerUnaryCall<Str, Str>,
        callback: sendUnaryData<Str>
    ): Promise<void> {
        const res: Str = new Str();
        try {
            logger.info("Get my portrait request", call.request);
            //console.log("log==>",call.request)
            let req = JSON.parse(call.request.getData())
            //console.log("log2==>",req)
            //let category = await getAllCategories(call.request);
            let responses = await bonusStorage.GetCategories(req?.user_id);
            let category = req?.categories
            let result:any = [];
            if (Array.isArray(category)) {
                category?.forEach((element) => {
                    var status = false;
                    if(responses) {
                        for (var i = 0; i < responses?.length; i++) {
                            if (responses[i]?.category == element?.id) {
                                status = true;
                                break;
                            }
                        }
                    }
                    result.push({
                        status,
                        id: element.id,
                        title: element.title
                    });
                });
            }
            // rest.json({
            //     result
            // });
            //console.log("result.json()+===>",result);
            res.setData(JSON.stringify(result));
            //console.log("res==>",res);
            callback(null, res);
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }


    async addExpenditure(
        call: ServerUnaryCall<AddExpenditureRequest, AddExpenditureResponse>,
        callback: sendUnaryData<AddExpenditureResponse>
    ): Promise<void> {
        const res: AddExpenditureResponse = new AddExpenditureResponse();
        try {
            const request = call.request.toObject();
            // const user_id = call.request.getUserId();
            // const score = call.request.getScore();
            // const title = call.request.getTitle();
            // const type = call.request.getType();
            // const receiver = call.request.getReceiver();
            const createExpenditure  = await ExpenditureModel.create(request);
            res.setStatus("success");
            res.setId(createExpenditure?.id)
            callback(null, res);
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }
    //

    async printHello(
        call: ServerUnaryCall<Str, Str>,
        callback: sendUnaryData<Str>
    ): Promise<void> {
        const res: Str = new Str();
        try {
            const request = call.request.toObject();
            res.setData("Hello")
            callback(null, res);
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }

    async listByUsers(
        call: ServerUnaryCall<ListByUsersReq, any>,
        callback: sendUnaryData<any>
    ): Promise<void> {
        const response: Str = new Str();
        try {
            let data: any;
            data = call.request.toObject();
            console.log("dataaa=>>",data);
            const survey_id = data.surveyId;
            console.log(survey_id);
            
            const user_id = data.userId;
            // const respondent_id = req.query.respondent_id;
            // console.log("id==>",respondent_id?.toString());
            let limit: any = data.limit || 20;
            let page: number =
                data.page && typeof data.page === "string" ? parseInt(data.page, 10) - 1 : 0;
            limit = parseInt(limit, 10);
            //let body = data.body;
            //console.log("req body==>",body);
            let filter: any = {};
            filter.$and = [];
            filter.$and.push({user_id : {
                $eq : user_id
            }});
            // filter.$and.push({status : {
            //     $eq : "finished"
            // }});
            // if (respondent_id) {
            //     filter.$and.push({user_id : {
            //         $eq: respondent_id
            //     }});
            // } 
            filter.$and.push({ survey_id }, { user_id }, { deleted_at: undefined });

            // if (body.other && body.other.length > 0) {
            //     body.other.forEach((element: any) => {
            //         let filterDates: any = {};
            //         let type = element.question_type;
            //         switch (type) {
            //             case "radio":
            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         {
            //                             "questions.answer.answer": {
            //                                 $eq: element.answer.answer
            //                             }
            //                         }
            //                     ]
            //                 };
            //                 break;
            //             case "text":
            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         {
            //                             "questions.answer.text": {
            //                                 $eq: element.answer.text
            //                             }
            //                         }
            //                     ]
            //                 };
            //                 break;
            //             case "number":
            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         {
            //                             "questions.answer.text": {
            //                                 $eq: element.answer.text
            //                             }
            //                         }
            //                     ]
            //                 };
            //                 break;
            //             case "date":
            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         {
            //                             "questions.answer.date": {
            //                                 $eq: new Date(element.answer.date)
            //                             }
            //                         }
            //                     ]
            //                 };
            //                 break;
            //             case "checkbox":
            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         {
            //                             "questions.answer.answers": {
            //                                 $all: element.answer.answers
            //                             }
            //                         }
            //                     ]
            //                 };
            //                 break;
            //             case "matrix-single":
            //                 let filter1: any = {};
            //                 filter1.$all = [];
            //                 element.answer.matrix.forEach((m: any) => {
            //                     filter1.$all.push({
            //                         $elemMatch: {
            //                             row_id: { $eq: m.row_id },
            //                             column: { $eq: m.column }
            //                         }
            //                     });
            //                 });
            //                 let filter2: any = {};
            //                 filter2["questions.answer.matrix"] = {
            //                     ...filter1
            //                 };

            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         filter2
            //                     ]
            //                 };
            //                 break;
            //             case "matrix-multiple":
            //                 filter1 = {};
            //                 filter1.$all = [];
            //                 element.answer.matrix.forEach((m: any) => {
            //                     filter1.$all.push({
            //                         $elemMatch: {
            //                             row_id: { $eq: m.row_id },
            //                             columns: { $all: m.columns }
            //                         }
            //                     });
            //                 });
            //                 filter2 = {};
            //                 filter2["questions.answer.matrix"] = {
            //                     ...filter1
            //                 };

            //                 filterDates = {
            //                     $and: [
            //                         {
            //                             "questions.id": {
            //                                 $eq: element.question_id
            //                             }
            //                         },
            //                         filter2
            //                     ]
            //                 };
            //                 break;
            //             default:
            //                 break;
            //         }

            //         filter.$and.push(filterDates);
            //     });
            // }
            // const filterDates: any = {};
            // if (body.date === undefined) {
            //     filterDates["$gte"] = 0;
            //     filterDates["$lte"] = Date.now;
            // } else if (body.date.from || body.date.to) {
            //     if (body.date.from !== undefined) {
            //         filterDates["$gte"] = new Date(body.date.from) || 0;
            //     }
            //     if (body.date.to) {
            //         filterDates["$lte"] = new Date(body.date.to) || Date.now;
            //     }
            //     filter["started_at"] = {
            //         ...filterDates
            //     };
            // }
            // console.log(filter);
            // logger.info(filter, {
            //     request: data.body,
            //     label: "Individual responses"
            // });
            const allResponses = await ResponseModel.find(filter)
                .limit(limit)
                .skip(page * limit)
                .sort({ started_at: "desc" });
            const count = await ResponseModel.countDocuments(filter);
            //console.log("allresponses===>",allResponses[0].questions);
            
            response.setData(JSON.stringify(allResponses[0]))
            callback(null,response)
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }
    async getQuestionFirst(
        call: ServerUnaryCall<any, any>,
        callback: sendUnaryData<any>
    ){
        const response: Str = new Str();
        try {
            let data: any;
            let savedData: any = {};
            
            data = JSON.parse(call.request);
            console.log("dataaa==>",data);

            if (data.first_question == true && data.multiple == false) {
                var ids: any[] = []
                const r2 = await ResponseModel.find({
                    user_id: data?.user_id,
                    status: "finished"
                }).sort({ started_at: "desc" });
                r2.forEach((element: any) => {
                    ids.push(element?.survey_id)
                });
    
                const r3 = await ResponseModel.find({
                    user_id: data?.user_id,
                    status: "fullquota"
                }).sort({ started_at: "desc" });
                r3.forEach((element: any) => {
                    ids.push(element?.survey_id)
                });
                if (ids.includes(data.survey_id)){
                    data.status = "canceled"
                    response.setData(JSON.stringify(data))
                    callback(null,response)
                }
            }
            
            if (data.data && data.data.finished && data.data.finished === true) {
                const createBonus = await bonusStorage.create(data);
                if (createBonus.status === "finished") {
                    data.data.bonus_info = createBonus.data;
                    data.status="finished"
                    response.setData(JSON.stringify(data))
                    callback(null,response)
                } else logger.error("survey finished error", createBonus);
            } else {
                savedData = await responseStorage.create(data);
                response.setData(JSON.stringify(savedData))
                callback(null,response)
            }
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }
    //  async listByManager(
    //     call: ServerUnaryCall<any, any>,
    //     callback: sendUnaryData<any>
    // ){
    //     try {
    //         const survey_id = call.request.survey_id;
    //         const manager_id = call.request.manager_id;
    //         const respondent_id = call.request.respondent_id;
    //         let limit: any = call.request.limit || 20;
    //         let page: number =
    //             call.request.page && typeof call.request.page === "string" ? parseInt(call.request.page, 10) - 1 : 0;
    //         limit = parseInt(limit, 10);
    //         let body = req.body;
    //         let filter: any = {};
    //         filter.$and = [];
    //         filter.$and.push({user_id : {
    //             $ne : manager_id
    //         }});
    //         filter.$and.push({status : {
    //             $eq : "finished"
    //         }});
    //         if (respondent_id) {
    //             filter.$and.push({user_id : {
    //                 $eq: respondent_id
    //             }});
    //         } 
    //         filter.$and.push({ survey_id }, { manager_id }, { deleted_at: undefined });

    //         if (body.other && body.other.length > 0) {
    //             body.other.forEach((element: any) => {
    //                 let filterDates: any = {};
    //                 let type = element.question_type;
    //                 switch (type) {
    //                     case "radio":
    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 {
    //                                     "questions.answer.answer": {
    //                                         $eq: element.answer.answer
    //                                     }
    //                                 }
    //                             ]
    //                         };
    //                         break;
    //                     case "text":
    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 {
    //                                     "questions.answer.text": {
    //                                         $eq: element.answer.text
    //                                     }
    //                                 }
    //                             ]
    //                         };
    //                         break;
    //                     case "number":
    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 {
    //                                     "questions.answer.text": {
    //                                         $eq: element.answer.text
    //                                     }
    //                                 }
    //                             ]
    //                         };
    //                         break;
    //                     case "date":
    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 {
    //                                     "questions.answer.date": {
    //                                         $eq: new Date(element.answer.date)
    //                                     }
    //                                 }
    //                             ]
    //                         };
    //                         break;
    //                     case "checkbox":
    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 {
    //                                     "questions.answer.answers": {
    //                                         $all: element.answer.answers
    //                                     }
    //                                 }
    //                             ]
    //                         };
    //                         break;
    //                     case "matrix-single":
    //                         let filter1: any = {};
    //                         filter1.$all = [];
    //                         element.answer.matrix.forEach((m: any) => {
    //                             filter1.$all.push({
    //                                 $elemMatch: {
    //                                     row_id: { $eq: m.row_id },
    //                                     column: { $eq: m.column }
    //                                 }
    //                             });
    //                         });
    //                         let filter2: any = {};
    //                         filter2["questions.answer.matrix"] = {
    //                             ...filter1
    //                         };

    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 filter2
    //                             ]
    //                         };
    //                         break;
    //                     case "matrix-multiple":
    //                         filter1 = {};
    //                         filter1.$all = [];
    //                         element.answer.matrix.forEach((m: any) => {
    //                             filter1.$all.push({
    //                                 $elemMatch: {
    //                                     row_id: { $eq: m.row_id },
    //                                     columns: { $all: m.columns }
    //                                 }
    //                             });
    //                         });
    //                         filter2 = {};
    //                         filter2["questions.answer.matrix"] = {
    //                             ...filter1
    //                         };

    //                         filterDates = {
    //                             $and: [
    //                                 {
    //                                     "questions.id": {
    //                                         $eq: element.question_id
    //                                     }
    //                                 },
    //                                 filter2
    //                             ]
    //                         };
    //                         break;
    //                     default:
    //                         break;
    //                 }

    //                 filter.$and.push(filterDates);
    //             });
    //         }
    //         const filterDates: any = {};
    //         if (body.date === undefined) {
    //             filterDates["$gte"] = 0;
    //             filterDates["$lte"] = Date.now;
    //         } else if (body.date.from || body.date.to) {
    //             if (body.date.from !== undefined) {
    //                 filterDates["$gte"] = new Date(body.date.from) || 0;
    //             }
    //             if (body.date.to) {
    //                 filterDates["$lte"] = new Date(body.date.to) || Date.now;
    //             }
    //             filter["started_at"] = {
    //                 ...filterDates
    //             };
    //         }
    //         console.log(filter);
    //         logger.info(filter, {
    //             request: req.body,
    //             label: "Individual responses"
    //         });
    //         const allResponses = await ResponseModel.find(filter)
    //             .limit(limit)
    //             .skip(page * limit)
    //             .sort({ started_at: "desc" });
    //         const count = await ResponseModel.countDocuments(filter);
    //         res.json({
    //             count,
    //             data: allResponses
    //         });
    //     } catch (e:any) {
    //         logger.error(e.message);
    //         return new ApiResponse(res).error(500, "SERVER_ERROR:");
    //     }
    // }
}

export { Expenditure, ExpenditureService };
