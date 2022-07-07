import logger from "../../config/logger";
import ResponseModel from "../../models/Response";
import config from "../../config";
import fetch from "node-fetch";

export default class {
    async get(data: any): Promise<any> {
        try {
            logger.info("Recived data", data);
            if (data.data) {
                let user_id: string = data.data || "";
                let uncompleted_surveys: any = [];
                let new_surveys: any = [];
                const r1 = await ResponseModel.find({
                    user_id,
                    status: "started"
                }).sort({ started_at: "desc" });
                r1.forEach((element) => {
                    uncompleted_surveys.push(element?.survey_id);
                });
                const r2 = await ResponseModel.find({
                    user_id: user_id
                }).sort({ started_at: "desc" });
                r2.forEach((element) => {
                    new_surveys.push(element?.survey_id);
                });

                return { uncompleted_surveys, new_surveys };
            }
        } catch (e:any) {
            logger.error(`Error on Get UncompletedSurveys: ${e.message}`);
            throw new Error(e);
        }
    }
}
