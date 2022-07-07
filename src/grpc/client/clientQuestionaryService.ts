import { ProjectServiceClient } from "../models/project_grpc_pb";
import { credentials, ServiceError } from "@grpc/grpc-js";
import {
    GetProjectWithSurveyRequest,
    GetProjectWithSurveyResponse,
    GetCategoriesRequest,
    GetCategoriesResponse
} from "../models/project_pb";
import config from "../../config";
type Resolve<T> = (value: T) => void;
type Reject = (reason?: unknown) => void;

class Surveys {
    private readonly contactClient: ProjectServiceClient = new ProjectServiceClient(
        `${config.questionaryServiceGrpcHost}:${config.questionaryServiceGrpcPort}`,
        credentials.createInsecure()
    );

    public async getProjectWithSurvey(param: GetProjectWithSurveyRequest): Promise<GetProjectWithSurveyResponse> {
        return new Promise((resolve: Resolve<GetProjectWithSurveyResponse>, reject: Reject): void => {
            this.contactClient.getProjectWithSurvey(
                param,
                (err: ServiceError | null, res: GetProjectWithSurveyResponse) => {
                    if (err) {
                        console.log("error on ques_service grpc :==>",err);
                        return reject(err);
                    }
                    resolve(res);
                }
            );
        });
    }

    public async getAllCategories(param: GetCategoriesRequest): Promise<GetCategoriesResponse> {
        return new Promise((resolve: Resolve<GetCategoriesResponse>, reject: Reject): void => {
            this.contactClient.getAllCategories(param, (err: ServiceError | null, res: GetCategoriesResponse) => {
                if (err) {
                    console.log("error on grpc: ", err);
                    return reject(err);
                }                
                resolve(res);
            });
        });
    }
}

export const questionaryService: Surveys = new Surveys();
