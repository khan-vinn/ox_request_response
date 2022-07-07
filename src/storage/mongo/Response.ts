import logger from "../../config/logger";
import ResponseModel from "../../models/Response";
import config from "../../config";
import fetch from "node-fetch";
import { getProjectWithSurvey } from "../../grpc/client/QuestionaryService";

export default class {
    async create(data: any): Promise<any> {
        try {
            let savedData: any;
            logger.info("Recived data", data);
            console.log("qwertyyy=>",data)
            if (data.report_id) {
                console.log()
                const existingResponse = await ResponseModel.findById(data.report_id);
                if (!existingResponse) {
                    logger.error("RECORD_RESPONSE_NOT_FOUND!");
                    return {
                        status: "error",
                        data,
                        message: "RECORD_RESPONSE_NOT_FOUND"
                    };
                } else {
                    if (data.question === null) {
                        logger.error("Question body is empty!");
                        return {
                            status: "error",
                            data,
                            message: "Question body is empty!"
                        };
                    }
                    const index = existingResponse.questions.findIndex((x) => x.id === data.question.id);
                    if (index !== -1) {
                        data.question.created_at = existingResponse.questions[index].created_at;
                        data.question.updated_at = Date.now();
                        existingResponse.questions[index] = data.question;
                    } else {
                        data.question.created_at = Date.now();
                        existingResponse.questions.push(data.question);
                    }
                    let stat = ""
                    if (data.stat) {
                        stat = data.stat    
                        console.log("123")
                    } else {
                        stat = "started"
                        console.log("456")
                    }
                    //
                    console.log("stat==>",existingResponse.questions)

                    existingResponse.status = stat
                    existingResponse.number = data.number ? data.number : existingResponse.number | 0
                    existingResponse.language = data.language ? data.language : existingResponse.language
                    existingResponse.updated_at =  Date.now()
                    logger.info("existingResponse - >", existingResponse);
                    await existingResponse.save()

                    // savedData = await ResponseModel.findByIdAndUpdate(
                    //     existingResponse._id,
                    //     {
                    //         status: stat,
                    //         number: data.number ? data.number : existingResponse.number | 0,
                    //         language: data.language ? data.language : existingResponse.language,
                    //         //questions: existingResponse.questions,
                    //         $set: { questions: existingResponse.questions},
                    //         updated_at: Date.now()
                    //     },
                    //     {
                    //         new: true,
                    //         runValidators: true
                    //     }
                    // );
                    logger.info("Answer added to RecordResponse");
                    return {
                        status: "success",
                        data: existingResponse,
                        message: "ok"
                    };
                }
            } else {
                const { user_id, survey_id, manager_id, device, username, login, operator_id, is_manager } = data;
                let category;
                logger.info(`Is_manager ${is_manager}`);
                if (is_manager === false) {
                    logger.info("is_manager is (false)", is_manager);
                    let stat = '';
                    if (data.stat){
                        stat = stat
                    } else {
                        stat = "started"
                    }
                    const visititedResponse = await ResponseModel.findOne({
                        user_id,
                        survey_id,
                        status: stat,
                    });
                    if (visititedResponse) {
                        logger.info("Continue the visited survey", {
                            visititedResponse
                        });
                        return {
                            status: "success",
                            data: visititedResponse,
                            message: "ok"
                        };
                    } else {
                        const existingResponse = await ResponseModel.find({
                            user_id,
                            survey_id
                        });
                        if (existingResponse.length > 0) {
                            console.log("length why > 0")
                            logger.info("ExistingResponse Found", existingResponse);
                            const questionaryServiceUrl = config.questionaryService;
                            if (typeof questionaryServiceUrl === "string")
                                logger.info(questionaryServiceUrl + `/v1/survey/${survey_id}`);

                            //const grpcResponse = await getProjectWithSurvey(survey_id);
                            console.log("getProjectWithSurvey==>",data.survey);
                            //
                            if (data?.survey_info_multiple === false) {
                                logger.info("multiple_answers is false!");
                                data.is_return = true;
                                return {
                                    status: "success",
                                    data,
                                    message: "NO_ACCESS"
                                };
                            } else {
                                logger.info("multiple_answers is true");
                                logger.info("Create second Question_Response for users", {
                                    user_id,
                                    survey_id,
                                    manager_id
                                });
                                const questions: any = [];
                                savedData = await ResponseModel.create({
                                    user_id,
                                    survey_id,
                                    manager_id,
                                    username,
                                    login,
                                    operator_id,
                                    device,
                                    questions
                                });
                                return {
                                    status: "success",
                                    data: savedData,
                                    message: "ok"
                                };
                            }
                        } else {
                            logger.info("ExistingResponse Not Found", existingResponse);
                            logger.info("Create first Question_Response for users", {
                                user_id,
                                survey_id,
                                manager_id
                            });
                            const questions: any = [];
                            savedData = await ResponseModel.create({
                                user_id,
                                survey_id,
                                manager_id,
                                username,
                                login,
                                operator_id,
                                device,
                                questions
                            });
                            console.log("existing_response===>",savedData);
                            
                            return {
                                status: "success",
                                data: savedData,
                                message: "ok"
                            };
                        }
                    }
                } else {
                    logger.info("is_manager is (true)", is_manager);
                    logger.info("Create first Question_Response for managers", {
                        user_id,
                        survey_id,
                        manager_id
                    });
                    const questions: any = [];
                    savedData = await ResponseModel.create({
                        user_id,
                        survey_id,
                        manager_id,
                        username,
                        login,
                        operator_id,
                        device,
                        questions
                    });
                    console.log("am i manager?==>",savedData);
                    
                    return {
                        status: "success",
                        data: savedData,
                        message: "ok"
                    };
                }
            }
        } catch (e: any) {
            logger.error(`Error on creating question: ${e.message}`);
            throw new Error(e);
        }
    }
    // async GetCategories(req: any): Promise<any> {
    //     try {
    //         logger.info("Getting categories by user_id: ", req);
    //         const response = await ResponseModel.find({ user_id: req });
    //         if (!response) {
    //             logger.error(`Responses not found`);
    //             return [];
    //         }
    //         return response;
    //     } catch (e:any) {
    //         logger.error(`Error on getting categories by user_id: ${e.message}`);
    //         throw new Error(e);
    //     }
    // }
}
