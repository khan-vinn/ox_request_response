import logger from "../../config/logger";
import BonusModel from "../../models/Bonus";
import ResponseModel from "../../models/Response";
import { addBalance } from "../../grpc/client/Balance";
import fetch from "node-fetch";
import config from "../../config";
import {getProjectWithSurvey} from "../../grpc/client/QuestionaryService";
export default class {
    async create(data: any): Promise<any> {
        let existingResponse = await ResponseModel.findById(
            data.data.report_id
        );
        if (!existingResponse) {
            logger.error("RECORD_RESPONSE_NOT_FOUND_BY_REPORT_ID!", data);
            return {
                status: "error",
                data,
                message: "RECORD_RESPONSE_NOT_FOUND_BY_REPORT_ID!"
            };
        }
        if (data.stat){
            console.log("treuee==>",data.stat);
            existingResponse.status = "fullquota"
        } else{
            existingResponse.status = "finished"
        }
        //existingResponse.status = "finished";
        existingResponse.updated_at = Date.now();
        existingResponse.finished_at = new Date(Date.now());
        const updatedData = await ResponseModel.findByIdAndUpdate(
            existingResponse._id,
            existingResponse,
            {
                new: true,
                runValidators: true
            }
        );
        let bonus: any;
        if (updatedData) {
            console.log("updatedData==>",updatedData);
            
            //const grpcResponse = await getProjectWithSurvey(updatedData.survey_id);
            // console.log("grpc response in Bonuse.ts: ", grpcResponse);
            // logger.info("grpc response in Bonuse.ts: ", grpcResponse);

            console.log("data==>",data);
            
            bonus = {
                user_id: updatedData.user_id,
                survey_id: updatedData.survey_id,
                created_at: Date.now(),
                category: data?.survey_info_category || "",
                survey_score: data?.survey_info_score || 0,
                survey_title: data?.survey_info_title|| ""
            };

            if (bonus !== undefined) {
                const data = {
                    user_id: bonus.user_id,
                    balance: bonus.survey_score
                };
                const savedBonus = await BonusModel.create(bonus);
                const balance = await addBalance(data);
                let bonus_info: any= {};
                bonus_info.user_id = savedBonus.user_id;
                bonus_info.survey_id = savedBonus.survey_id;
                bonus_info.survey_score = savedBonus.survey_score;
                bonus_info.created = true;

                logger.info("Balance incremented", balance);
                logger.info("Record added to BonusResponse");
                return {
                    status: "finished",
                    data: bonus_info,
                    message: "Record Response to Survey Finished"
                };
            }
        } else
            return {
                status: "error",
                data: data,
                message: "-"
            };
    }
    
    async GetCategories(req: any): Promise<any> {
        try {
            logger.info("Getting categories by user_id: ", req);
            const response = await BonusModel.find({ user_id: req });
            if (!response) {
                logger.error(`Responses not found`);
                return [];
            }
            return response;
        } catch (e:any) {
            logger.error(`Error on getting categories by user_id: ${e.message}`);
            throw new Error(e);
        }
    }
}
