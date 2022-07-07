// package: user_service
// file: system_user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as system_user_service_pb from "./system_user_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

interface ISystemUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISystemUserServiceService_ICreate;
    get: ISystemUserServiceService_IGet;
    find: ISystemUserServiceService_IFind;
    update: ISystemUserServiceService_IUpdate;
    resetPassword: ISystemUserServiceService_IResetPassword;
    delete: ISystemUserServiceService_IDelete;
    getByCredentials: ISystemUserServiceService_IGetByCredentials;
    getSlim: ISystemUserServiceService_IGetSlim;
    getByLogin: ISystemUserServiceService_IGetByLogin;
    getByEmail: ISystemUserServiceService_IGetByEmail;
    assignProjectToManager: ISystemUserServiceService_IAssignProjectToManager;
    getManagerProjects: ISystemUserServiceService_IGetManagerProjects;
}

interface ISystemUserServiceService_ICreate extends grpc.MethodDefinition<user_pb.SystemUser, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SystemUser>;
    requestDeserialize: grpc.deserialize<user_pb.SystemUser>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IGet extends grpc.MethodDefinition<user_pb.GetRequest, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IFind extends grpc.MethodDefinition<user_pb.FindRequest, system_user_service_pb.SystemUsersResponse> {
    path: "/user_service.SystemUserService/Find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.FindRequest>;
    requestDeserialize: grpc.deserialize<user_pb.FindRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUsersResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUsersResponse>;
}
interface ISystemUserServiceService_IUpdate extends grpc.MethodDefinition<user_pb.SystemUser, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SystemUser>;
    requestDeserialize: grpc.deserialize<user_pb.SystemUser>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IResetPassword extends grpc.MethodDefinition<user_pb.PasswordResetSystemUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/user_service.SystemUserService/ResetPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.PasswordResetSystemUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.PasswordResetSystemUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISystemUserServiceService_IDelete extends grpc.MethodDefinition<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/user_service.SystemUserService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISystemUserServiceService_IGetByCredentials extends grpc.MethodDefinition<user_pb.GetByCredentialsRequest, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/GetByCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByCredentialsRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByCredentialsRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IGetSlim extends grpc.MethodDefinition<user_pb.GetRequest, system_user_service_pb.SystemUserSlimResponse> {
    path: "/user_service.SystemUserService/GetSlim";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserSlimResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserSlimResponse>;
}
interface ISystemUserServiceService_IGetByLogin extends grpc.MethodDefinition<system_user_service_pb.GetByLoginSystemUserRequest, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/GetByLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_user_service_pb.GetByLoginSystemUserRequest>;
    requestDeserialize: grpc.deserialize<system_user_service_pb.GetByLoginSystemUserRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IGetByEmail extends grpc.MethodDefinition<system_user_service_pb.GetByEmailSystemUserRequest, system_user_service_pb.SystemUserResponse> {
    path: "/user_service.SystemUserService/GetByEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_user_service_pb.GetByEmailSystemUserRequest>;
    requestDeserialize: grpc.deserialize<system_user_service_pb.GetByEmailSystemUserRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.SystemUserResponse>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.SystemUserResponse>;
}
interface ISystemUserServiceService_IAssignProjectToManager extends grpc.MethodDefinition<system_user_service_pb.AssignProject, system_user_service_pb.AssignProjectResponce> {
    path: "/user_service.SystemUserService/AssignProjectToManager";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_user_service_pb.AssignProject>;
    requestDeserialize: grpc.deserialize<system_user_service_pb.AssignProject>;
    responseSerialize: grpc.serialize<system_user_service_pb.AssignProjectResponce>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.AssignProjectResponce>;
}
interface ISystemUserServiceService_IGetManagerProjects extends grpc.MethodDefinition<user_pb.GetRequest, system_user_service_pb.AssignedProjects> {
    path: "/user_service.SystemUserService/GetManagerProjects";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<system_user_service_pb.AssignedProjects>;
    responseDeserialize: grpc.deserialize<system_user_service_pb.AssignedProjects>;
}

export const SystemUserServiceService: ISystemUserServiceService;

export interface ISystemUserServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<user_pb.SystemUser, system_user_service_pb.SystemUserResponse>;
    get: grpc.handleUnaryCall<user_pb.GetRequest, system_user_service_pb.SystemUserResponse>;
    find: grpc.handleUnaryCall<user_pb.FindRequest, system_user_service_pb.SystemUsersResponse>;
    update: grpc.handleUnaryCall<user_pb.SystemUser, system_user_service_pb.SystemUserResponse>;
    resetPassword: grpc.handleUnaryCall<user_pb.PasswordResetSystemUserRequest, google_protobuf_empty_pb.Empty>;
    delete: grpc.handleUnaryCall<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
    getByCredentials: grpc.handleUnaryCall<user_pb.GetByCredentialsRequest, system_user_service_pb.SystemUserResponse>;
    getSlim: grpc.handleUnaryCall<user_pb.GetRequest, system_user_service_pb.SystemUserSlimResponse>;
    getByLogin: grpc.handleUnaryCall<system_user_service_pb.GetByLoginSystemUserRequest, system_user_service_pb.SystemUserResponse>;
    getByEmail: grpc.handleUnaryCall<system_user_service_pb.GetByEmailSystemUserRequest, system_user_service_pb.SystemUserResponse>;
    assignProjectToManager: grpc.handleUnaryCall<system_user_service_pb.AssignProject, system_user_service_pb.AssignProjectResponce>;
    getManagerProjects: grpc.handleUnaryCall<user_pb.GetRequest, system_user_service_pb.AssignedProjects>;
}

export interface ISystemUserServiceClient {
    create(request: user_pb.SystemUser, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.SystemUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.SystemUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SystemUser, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SystemUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SystemUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    resetPassword(request: user_pb.PasswordResetSystemUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    resetPassword(request: user_pb.PasswordResetSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    resetPassword(request: user_pb.PasswordResetSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getSlim(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    getSlim(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    getSlim(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    assignProjectToManager(request: system_user_service_pb.AssignProject, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    assignProjectToManager(request: system_user_service_pb.AssignProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    assignProjectToManager(request: system_user_service_pb.AssignProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    getManagerProjects(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
    getManagerProjects(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
    getManagerProjects(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
}

export class SystemUserServiceClient extends grpc.Client implements ISystemUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: user_pb.SystemUser, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.SystemUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.SystemUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUsersResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SystemUser, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SystemUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SystemUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public resetPassword(request: user_pb.PasswordResetSystemUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public resetPassword(request: user_pb.PasswordResetSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public resetPassword(request: user_pb.PasswordResetSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getSlim(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    public getSlim(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    public getSlim(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserSlimResponse) => void): grpc.ClientUnaryCall;
    public getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByLogin(request: system_user_service_pb.GetByLoginSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: system_user_service_pb.GetByEmailSystemUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.SystemUserResponse) => void): grpc.ClientUnaryCall;
    public assignProjectToManager(request: system_user_service_pb.AssignProject, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    public assignProjectToManager(request: system_user_service_pb.AssignProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    public assignProjectToManager(request: system_user_service_pb.AssignProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignProjectResponce) => void): grpc.ClientUnaryCall;
    public getManagerProjects(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
    public getManagerProjects(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
    public getManagerProjects(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_user_service_pb.AssignedProjects) => void): grpc.ClientUnaryCall;
}
