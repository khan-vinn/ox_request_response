import { questionaryService } from "./clientQuestionaryService";
import {
    GetProjectWithSurveyRequest,
    GetProjectWithSurveyResponse,
    GetCategoriesRequest,
    GetCategoriesResponse
} from "../models/project_pb";
import { IRequset } from "../../types/QuestionaryService";

export const getProjectWithSurvey = async (survey_id: any) => {
    const request: GetProjectWithSurveyRequest = new GetProjectWithSurveyRequest();
    request.setSurveyId(survey_id);
    try {
        const response = await questionaryService.getProjectWithSurvey(request);
        return response.toObject();
    } catch (e:any) {
        console.log(e);
        return;
    }
};
//
export const getAllCategories = async (req: any) => {
    const request: GetCategoriesRequest = new GetCategoriesRequest();
    request.setUserId(req);
    try {
        const response: GetCategoriesResponse = await questionaryService.getAllCategories(request);
        return response.toObject().categoriesList;
    } catch (e:any) {
        console.log(e);
        return;
    }
};
