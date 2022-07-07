import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall } from "@grpc/grpc-js";
import { GetSurveysRequest, GetSurveysResponse, UncompletedSurveys, NewSurveys, FullQuotaSurveys } from "../models/questionary_service_pb";
import { ISurveysServer, SurveysService } from "../models/questionary_service_grpc_pb";
import { ServiceError } from "../../lib/grpc/serviceError";
import ResponseModel from "../../models/Response";

class Surveys implements ISurveysServer {
    [method: string]: UntypedHandleCall;

    async getSurveys(
        call: ServerUnaryCall<GetSurveysRequest, GetSurveysResponse>,
        callback: sendUnaryData<GetSurveysResponse>
    ): Promise<void> {
        const res: GetSurveysResponse = new GetSurveysResponse();
        try {
            //console.log("qwdsfb==>")
            const user_id = call.request.getUserId();
            const r1 = await ResponseModel.find({
                user_id: user_id,
                status: "visited" || "started"
            }).sort({ started_at: "desc" });
            r1.forEach((element: any) => {
                const uncompletedSurvey: UncompletedSurveys = new UncompletedSurveys();
                uncompletedSurvey.setId(element?.survey_id);
                uncompletedSurvey
                res.addUncompletedSurveys(uncompletedSurvey)
            });

            const r2 = await ResponseModel.find({
                user_id: user_id,
                status: "finished"
            }).sort({ started_at: "desc" });
            r2.forEach((element: any) => {
                const newSurvey: NewSurveys = new NewSurveys();
                newSurvey.setId(element?.survey_id);
                res.addNewSurveys(newSurvey)
            });

            const r3 = await ResponseModel.find({
                user_id: user_id,
                status: "fullquota"
            }).sort({ started_at: "desc" });
            r3.forEach((element: any) => {
                const fullquotaSurvey: FullQuotaSurveys = new FullQuotaSurveys();
                fullquotaSurvey.setId(element?.survey_id);
                res.addFullquotaSurveys(fullquotaSurvey)
            });
            
            callback(null, res);
        } catch (e:any) {
            console.log(e);
            callback(new ServiceError(status.INTERNAL, "SERVER_ERROR"), null);
        }
    }
}

export { Surveys, SurveysService };
