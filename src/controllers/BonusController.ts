/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ApiResponse } from "../lib/ApiResponse";
import logger from "../config/logger";
import BonusModel, { IBonus } from "../models/Bonus";
export default class {
    async listBySurvey(req: Request, res: Response): Promise<any> {
        try {
            logger.info("Get Bonuses by survey_id", req.params);
            const survey_id = req.params.survey_id;
            let limit: any = req.query.limit || 20;
            let page: number =
                req.query.page && typeof req.query.page === "string" ? parseInt(req.query.page, 10) - 1 : 0;
            limit = parseInt(limit, 10);

            const bonuses = await BonusModel.find({ survey_id: survey_id })
                .limit(limit)
                .skip(page * limit)
                .sort({ started_at: "desc" });
            logger.info("Bonuses data by survey_id", bonuses);

            const count = await BonusModel.countDocuments({
                survey_id: survey_id
            });

            res.json({
                count,
                data: bonuses || []
            });
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR:");
        }
    }

    async listByUser(req: Request, res: Response): Promise<any> {
        try {
            logger.info("Get Bonuses by user_id", req.params);
            const user_id = req.params.user_id;
            let limit: any = req.query.limit || 20;
            let page: number =
                req.query.page && typeof req.query.page === "string" ? parseInt(req.query.page, 10) - 1 : 0;
            limit = parseInt(limit, 10);
            let bonus:any = [];
           let bonuses = await BonusModel.find({ user_id: user_id })
                .limit(limit)
                .skip(page * limit)
                .sort({ created_at: "desc" });

            bonuses.forEach(async (element:any, index:any) => {
                let k : any= {...element._doc, created_at_unix: element.created_at.valueOf()}
                bonus.push(k)
            }); 
            const count = await BonusModel.countDocuments({
                user_id: user_id
            });
            logger.info("Bonuses data by user_id", bonuses);
            res.json({
                count,
                data: bonus || []
            });
        } catch (e:any) {
            logger.error(e.message);
            return new ApiResponse(res).error(500, "SERVER_ERROR:");
        }
    }
}
