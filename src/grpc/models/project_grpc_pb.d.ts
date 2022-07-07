// package: questionary_service
// file: project.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as project_pb from "./project_pb";
import * as common_pb from "./common_pb";

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProjectServiceService_ICreate;
    getByManager: IProjectServiceService_IGetByManager;
    getProjectWithSurvey: IProjectServiceService_IGetProjectWithSurvey;
    getAllCategories: IProjectServiceService_IGetAllCategories;
    createQuota: IProjectServiceService_ICreateQuota;
    getBySurvey: IProjectServiceService_IGetBySurvey;
    updateQuota: IProjectServiceService_IUpdateQuota;
    deleteQuota: IProjectServiceService_IDeleteQuota;
    getFirsQuestion: IProjectServiceService_IGetFirsQuestion;
    updateLeftPlaces: IProjectServiceService_IUpdateLeftPlaces;
}

interface IProjectServiceService_ICreate extends grpc.MethodDefinition<project_pb.CreateProjectRequest, common_pb.CreateResponse> {
    path: "/questionary_service.ProjectService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.CreateProjectRequest>;
    requestDeserialize: grpc.deserialize<project_pb.CreateProjectRequest>;
    responseSerialize: grpc.serialize<common_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<common_pb.CreateResponse>;
}
interface IProjectServiceService_IGetByManager extends grpc.MethodDefinition<project_pb.GetProjectsByManagerRequest, project_pb.GetProjectsByManagerResponse> {
    path: "/questionary_service.ProjectService/GetByManager";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.GetProjectsByManagerRequest>;
    requestDeserialize: grpc.deserialize<project_pb.GetProjectsByManagerRequest>;
    responseSerialize: grpc.serialize<project_pb.GetProjectsByManagerResponse>;
    responseDeserialize: grpc.deserialize<project_pb.GetProjectsByManagerResponse>;
}
interface IProjectServiceService_IGetProjectWithSurvey extends grpc.MethodDefinition<project_pb.GetProjectWithSurveyRequest, project_pb.GetProjectWithSurveyResponse> {
    path: "/questionary_service.ProjectService/GetProjectWithSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.GetProjectWithSurveyRequest>;
    requestDeserialize: grpc.deserialize<project_pb.GetProjectWithSurveyRequest>;
    responseSerialize: grpc.serialize<project_pb.GetProjectWithSurveyResponse>;
    responseDeserialize: grpc.deserialize<project_pb.GetProjectWithSurveyResponse>;
}
interface IProjectServiceService_IGetAllCategories extends grpc.MethodDefinition<project_pb.GetCategoriesRequest, project_pb.GetCategoriesResponse> {
    path: "/questionary_service.ProjectService/GetAllCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.GetCategoriesRequest>;
    requestDeserialize: grpc.deserialize<project_pb.GetCategoriesRequest>;
    responseSerialize: grpc.serialize<project_pb.GetCategoriesResponse>;
    responseDeserialize: grpc.deserialize<project_pb.GetCategoriesResponse>;
}
interface IProjectServiceService_ICreateQuota extends grpc.MethodDefinition<project_pb.CreateQuotaRequest, project_pb.QuotaID> {
    path: "/questionary_service.ProjectService/CreateQuota";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.CreateQuotaRequest>;
    requestDeserialize: grpc.deserialize<project_pb.CreateQuotaRequest>;
    responseSerialize: grpc.serialize<project_pb.QuotaID>;
    responseDeserialize: grpc.deserialize<project_pb.QuotaID>;
}
interface IProjectServiceService_IGetBySurvey extends grpc.MethodDefinition<project_pb.QuotaID, project_pb.Quota> {
    path: "/questionary_service.ProjectService/GetBySurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.QuotaID>;
    requestDeserialize: grpc.deserialize<project_pb.QuotaID>;
    responseSerialize: grpc.serialize<project_pb.Quota>;
    responseDeserialize: grpc.deserialize<project_pb.Quota>;
}
interface IProjectServiceService_IUpdateQuota extends grpc.MethodDefinition<project_pb.Quota, project_pb.QuotaID> {
    path: "/questionary_service.ProjectService/UpdateQuota";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Quota>;
    requestDeserialize: grpc.deserialize<project_pb.Quota>;
    responseSerialize: grpc.serialize<project_pb.QuotaID>;
    responseDeserialize: grpc.deserialize<project_pb.QuotaID>;
}
interface IProjectServiceService_IDeleteQuota extends grpc.MethodDefinition<project_pb.QuotaID, project_pb.QuotaID> {
    path: "/questionary_service.ProjectService/DeleteQuota";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.QuotaID>;
    requestDeserialize: grpc.deserialize<project_pb.QuotaID>;
    responseSerialize: grpc.serialize<project_pb.QuotaID>;
    responseDeserialize: grpc.deserialize<project_pb.QuotaID>;
}
interface IProjectServiceService_IGetFirsQuestion extends grpc.MethodDefinition<project_pb.Str, project_pb.Payloads> {
    path: "/questionary_service.ProjectService/GetFirsQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Str>;
    requestDeserialize: grpc.deserialize<project_pb.Str>;
    responseSerialize: grpc.serialize<project_pb.Payloads>;
    responseDeserialize: grpc.deserialize<project_pb.Payloads>;
}
interface IProjectServiceService_IUpdateLeftPlaces extends grpc.MethodDefinition<project_pb.QuotaID, project_pb.QuotaID> {
    path: "/questionary_service.ProjectService/UpdateLeftPlaces";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.QuotaID>;
    requestDeserialize: grpc.deserialize<project_pb.QuotaID>;
    responseSerialize: grpc.serialize<project_pb.QuotaID>;
    responseDeserialize: grpc.deserialize<project_pb.QuotaID>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<project_pb.CreateProjectRequest, common_pb.CreateResponse>;
    getByManager: grpc.handleUnaryCall<project_pb.GetProjectsByManagerRequest, project_pb.GetProjectsByManagerResponse>;
    getProjectWithSurvey: grpc.handleUnaryCall<project_pb.GetProjectWithSurveyRequest, project_pb.GetProjectWithSurveyResponse>;
    getAllCategories: grpc.handleUnaryCall<project_pb.GetCategoriesRequest, project_pb.GetCategoriesResponse>;
    createQuota: grpc.handleUnaryCall<project_pb.CreateQuotaRequest, project_pb.QuotaID>;
    getBySurvey: grpc.handleUnaryCall<project_pb.QuotaID, project_pb.Quota>;
    updateQuota: grpc.handleUnaryCall<project_pb.Quota, project_pb.QuotaID>;
    deleteQuota: grpc.handleUnaryCall<project_pb.QuotaID, project_pb.QuotaID>;
    getFirsQuestion: grpc.handleUnaryCall<project_pb.Str, project_pb.Payloads>;
    updateLeftPlaces: grpc.handleUnaryCall<project_pb.QuotaID, project_pb.QuotaID>;
}

export interface IProjectServiceClient {
    create(request: project_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: project_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: project_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    getByManager(request: project_pb.GetProjectsByManagerRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    getByManager(request: project_pb.GetProjectsByManagerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    getByManager(request: project_pb.GetProjectsByManagerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    getAllCategories(request: project_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getAllCategories(request: project_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getAllCategories(request: project_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    createQuota(request: project_pb.CreateQuotaRequest, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    createQuota(request: project_pb.CreateQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    createQuota(request: project_pb.CreateQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    getBySurvey(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    getBySurvey(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    getBySurvey(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    updateQuota(request: project_pb.Quota, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    updateQuota(request: project_pb.Quota, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    updateQuota(request: project_pb.Quota, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    deleteQuota(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    deleteQuota(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    deleteQuota(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    getFirsQuestion(request: project_pb.Str, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    getFirsQuestion(request: project_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    getFirsQuestion(request: project_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    updateLeftPlaces(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    updateLeftPlaces(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    updateLeftPlaces(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
}

export class ProjectServiceClient extends grpc.Client implements IProjectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: project_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: project_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: project_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public getByManager(request: project_pb.GetProjectsByManagerRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    public getByManager(request: project_pb.GetProjectsByManagerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    public getByManager(request: project_pb.GetProjectsByManagerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectsByManagerResponse) => void): grpc.ClientUnaryCall;
    public getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    public getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    public getProjectWithSurvey(request: project_pb.GetProjectWithSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetProjectWithSurveyResponse) => void): grpc.ClientUnaryCall;
    public getAllCategories(request: project_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getAllCategories(request: project_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getAllCategories(request: project_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public createQuota(request: project_pb.CreateQuotaRequest, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public createQuota(request: project_pb.CreateQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public createQuota(request: project_pb.CreateQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public getBySurvey(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    public getBySurvey(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    public getBySurvey(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Quota) => void): grpc.ClientUnaryCall;
    public updateQuota(request: project_pb.Quota, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public updateQuota(request: project_pb.Quota, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public updateQuota(request: project_pb.Quota, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public deleteQuota(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public deleteQuota(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public deleteQuota(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public getFirsQuestion(request: project_pb.Str, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    public getFirsQuestion(request: project_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    public getFirsQuestion(request: project_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Payloads) => void): grpc.ClientUnaryCall;
    public updateLeftPlaces(request: project_pb.QuotaID, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public updateLeftPlaces(request: project_pb.QuotaID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
    public updateLeftPlaces(request: project_pb.QuotaID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.QuotaID) => void): grpc.ClientUnaryCall;
}
