import { Request, response, Response } from "express";
import logger from "../config/logger";
import ResponseStorage from "../storage/mongo/Bonus";
import { getAllCategories } from "../grpc/client/QuestionaryService";

const bonusStorage = new ResponseStorage();

export default class {
    async get(req: Request, res: Response): Promise<any> {
        try {
            logger.info("Get my portrait request", req.params.user_id);
            let category = await getAllCategories(req.params.user_id);
            let responses = await bonusStorage.GetCategories(req.params.user_id);
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
            console.log("rewssult==>",result);
            
            res.json({
                result
            });
        } catch (e:any) {
            logger.error(`Error on get my portrait: ${e.message}`);
            throw new Error(e);
        }
    }
}
