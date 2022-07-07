/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import kafka from "kafka-node";
import { ApiResponse } from "../lib/ApiResponse";
import logger from "../config/logger";
import ResponseModel, { IResponce } from "../models/Response";
import ResponseStorage from "../storage/mongo/Response";
import config from "../config";

const responseStorage = new ResponseStorage();

export default class {
    async create(req: Request, res: Response): Promise<any> {
        try {
            const data = req.body;
            const str = JSON.stringify(data);
            const payloads = [
                {
                    topic: "v1.question_response_service.answer.recorded",
                    messages: str,
                    partition: 0
                }
            ];

            const Producer = kafka.Producer,
                client = new kafka.KafkaClient({
                    kafkaHost: `${config.kafkaHost}:${config.kafkaPort}`
                }),
                producer = new Producer(client, {
                    requireAcks: 0,
                    partitionerType: 2
                });

            producer.send(payloads, (err, data) => {
                if (err) {
                    console.log(
                        "[kafka-producer -> v1.question_response_service.answer.recorded, partition: 0]: broker update failed"
                    );
                    console.log(err);
                } else {
                    console.log(
                        "[kafka-producer -> v1.question_response_service.answer.recorded, partition: 0]: broker update success"
                    );
                }
            });

            producer.on("ready", function () {
                console.log("producer ready v1.question_response_service.answer.recorded, partition: 0");
            });
            producer.on("error", function (err) {
                logger.error(err.message, {
                    function: "create response",
                    request: req
                });
                console.log(
                    "[kafka-producer -> v1.question_response_service.answer.recorded, partition: 0]: connection errored"
                );
                throw err;
            });

            return new ApiResponse(res).success(data);
        } catch (e:any) {
            logger.error(`Error on creating response: ${e.message}`);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }

    async list(req: Request, res: Response): Promise<any> {
        try {
            let limit: any = req.query.limit || 5;
            let page: any = req.query.page || 0;
            page = parseInt(page, 10);
            limit = parseInt(limit, 10);
            const allResponses = await ResponseModel.find()
                .limit(limit)
                .skip(page * limit)
                .sort({ started_at: "desc" });
            const count = await ResponseModel.countDocuments();
            res.json({
                count,
                allResponses
            });
            // return new ApiResponse(res).success({count, allResponses});
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }

    async listByUser(req: Request, res: Response): Promise<any> {
        try {
            logger.info("req resieved for get uncompleted_surveys");
            
            let user_id: string = req.params.user_id || "";
            let uncompleted_surveys:any = [];
            let new_surveys:any = [];
            const r1 = await ResponseModel.find({
                user_id: user_id,
                status: "visited"
            }).sort({ started_at: "desc" });
            r1.forEach((element) => {
                uncompleted_surveys.push(element?.survey_id);
            });
            const r2 = await ResponseModel.find({
                user_id: user_id,
            }).sort({ started_at: "desc" });
            r2.forEach((element) => {
                new_surveys.push(element?.survey_id);
            });
            res.json({
                uncompleted_surveys,
                new_surveys
            });
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }

    async listByManager(req: Request, res: Response): Promise<any> {
        try {
            console.log("requu=>",req.params)
            const survey_id = req.params.survey_id;
            const manager_id = req.params.manager_id;
            let limit: any = req.query.limit || 20;
            let page: number =
                req.query.page && typeof req.query.page === "string" ? parseInt(req.query.page, 10) - 1 : 0;
            limit = parseInt(limit, 10);
            let body = req.body;
            //console.log("req body==>",body);
            let filter: any = {};
            filter.$and = [];
            //filter.$and.push({user_id : {
            //    $ne : manager_id
            //}});

            filter.$and.push({status : {
                $eq : "finished"
            }});
            // if (respondent_id) {
            //     filter.$and.push({user_id : {
            //         $eq: respondent_id
            //     }});
            // } 
            filter.$and.push({ survey_id }, { deleted_at: undefined });

            if (body.other && body.other.length > 0) {
                body.other.forEach((element: any) => {
                    let filterDates: any = {};
                    let type = element.question_type;
                    switch (type) {
                        case "radio":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.answer": {
                                            $eq: element.answer.answer
                                        }
                                    }
                                ]
                            };
                            break;
                        case "scale":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.answer": {
                                            $eq: element.answer.answer
                                        }
                                    }
                                ]
                            };
                            break;
                        case "text":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.text": {
                                            $eq: element.answer.text
                                        }
                                    }
                                ]
                            };
                            break;
                        case "number":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.text": {
                                            $eq: element.answer.text
                                        }
                                    }
                                ]
                            };
                            break;
                        case "date":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.date": {
                                            $eq: new Date(element.answer.date)
                                        }
                                    }
                                ]
                            };
                            break;
                        case "checkbox":
                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    {
                                        "questions.answer.answers": {
                                            $all: element.answer.answers
                                        }
                                    }
                                ]
                            };
                            break;
                        case "matrix-single":
                            let filter1: any = {};
                            filter1.$all = [];
                            element.answer.matrix.forEach((m: any) => {
                                filter1.$all.push({
                                    $elemMatch: {
                                        row_id: { $eq: m.row_id },
                                        column: { $eq: m.column }
                                    }
                                });
                            });
                            let filter2: any = {};
                            filter2["questions.answer.matrix"] = {
                                ...filter1
                            };

                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    filter2
                                ]
                            };
                            break;
                        case "matrix-multiple":
                            filter1 = {};
                            filter1.$all = [];
                            element.answer.matrix.forEach((m: any) => {
                                filter1.$all.push({
                                    $elemMatch: {
                                        row_id: { $eq: m.row_id },
                                        columns: { $all: m.columns }
                                    }
                                });
                            });
                            filter2 = {};
                            filter2["questions.answer.matrix"] = {
                                ...filter1
                            };

                            filterDates = {
                                $and: [
                                    {
                                        "questions.id": {
                                            $eq: element.question_id
                                        }
                                    },
                                    filter2
                                ]
                            };
                            break;
                        default:
                            break;
                    }

                    filter.$and.push(filterDates);
                });
            }
            console.log("filter==>",filter)
            const filterDates: any = {};
            if (body.date === undefined) {
                filterDates["$gte"] = 0;
                filterDates["$lte"] = Date.now;
            } else if (body.date.from || body.date.to) {
                if (body.date.from !== undefined) {
                    filterDates["$gte"] = new Date(body.date.from) || 0;
                }
                if (body.date.to) {
                    filterDates["$lte"] = new Date(body.date.to) || Date.now;
                }
                filter["started_at"] = {
                    ...filterDates
                };
            }
            console.log(filter);
            logger.info(filter, {
                request: req.body,
                label: "Individual responses"
            });

            const allResponses = await ResponseModel.find(filter)
                .limit(limit)
                .skip(page * limit)
                .sort({ started_at: "desc" });
            const count = await ResponseModel.countDocuments(filter);
            //console.log("allresponses==>",allResponses[0].questions);

            res.json({
                count,
                data: allResponses
            });
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR:");
        }
    }

    async listByUsers(req: Request, res: Response): Promise<any> {
        try {
            const survey_id = req.params.survey_id;
            const user_id = req.params.user_id;
            // const respondent_id = req.query.respondent_id;
            // console.log("id==>",respondent_id?.toString());
            let limit: any = req.query.limit || 20;
            let page: number =
                req.query.page && typeof req.query.page === "string" ? parseInt(req.query.page, 10) - 1 : 0;
            limit = parseInt(limit, 10);
            let body = req.body;
            console.log("req body==>",body);
            let filter: any = {};
            filter.$and = [];
            filter.$and.push({user_id : {
                $eq : user_id
            }});
            filter.$and.push({status : {
                $eq : "finished"
            }});
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
            const filterDates: any = {};
            if (body.date === undefined) {
                filterDates["$gte"] = 0;
                filterDates["$lte"] = Date.now;
            } else if (body.date.from || body.date.to) {
                if (body.date.from !== undefined) {
                    filterDates["$gte"] = new Date(body.date.from) || 0;
                }
                if (body.date.to) {
                    filterDates["$lte"] = new Date(body.date.to) || Date.now;
                }
                filter["started_at"] = {
                    ...filterDates
                };
            }
            console.log(filter);
            logger.info(filter, {
                request: req.body,
                label: "Individual responses"
            });
            const allResponses = await ResponseModel.find(filter)
                .limit(limit)
                .skip(page * limit)
                .sort({ started_at: "desc" });
            const count = await ResponseModel.countDocuments(filter);
            res.json({
                count,
                data: allResponses
            });
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR:");
        }
    }

    async deleteBySurveyID(req: Request, res: Response): Promise<any> {
        try {
            const survey_id = req.params.survey_id;
            const user_id = req.params.user_id;
            const response: IResponce | null = await ResponseModel.findOne({
                survey_id,
                user_id
            });
            if (!response) {
                return new ApiResponse(res).error(404, "ANSWER_NOT_FOUND");
            }
            const deletedResponse = await ResponseModel.findByIdAndDelete(response?._id);
            res.status(200).json({
                message: "ok",
                data: deletedResponse
            });
        } catch (e:any) {
            logger.error(e);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }

    async delete(req: Request, res: Response): Promise<any> {
        try {
            const survey_id = req.params.survey_id;
            const manager_id = req.params.manager_id;
            const data: any = req.body;
            const answers_id: [string] = data.answers_id;
            let r: [string] | any = [];
            for (let i = 0; i < answers_id.length; i++) {
                const answers: IResponce | any = await ResponseModel.findOne({
                    _id: answers_id[i],
                    manager_id,
                    survey_id
                });
                if (!answers) {
                    return new ApiResponse(res).error(404, "ANSWER_NOT_MATCH_WITH_MANAGER_ID");
                }
                if (answers.deleted_at !== undefined) {
                    return new ApiResponse(res).error(400, "ANSWER_ALREADY_DELETED");
                }
                answers.deleted_at = Date.now();
                const deleteAnswer: any = await ResponseModel.findByIdAndUpdate(answers._id, answers, {
                    new: true,
                    runValidators: true
                });
                if (!deleteAnswer) {
                    return new ApiResponse(res).error(404, "ANSWER_NOT_EXIST");
                } else r.push(deleteAnswer._id);
            }

            res.status(200).json({
                message: "ok",
                data: r
            });
        } catch (e:any) {
            logger.error(e);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }
}
