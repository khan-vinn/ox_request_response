// package: user_service
// file: super_user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as super_user_service_pb from "./super_user_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

interface ISuperUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISuperUserServiceService_ICreate;
    get: ISuperUserServiceService_IGet;
    find: ISuperUserServiceService_IFind;
    update: ISuperUserServiceService_IUpdate;
    delete: ISuperUserServiceService_IDelete;
    getByCredentials: ISuperUserServiceService_IGetByCredentials;
}

interface ISuperUserServiceService_ICreate extends grpc.MethodDefinition<user_pb.SuperUser, super_user_service_pb.SuperUserResponse> {
    path: "/user_service.SuperUserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SuperUser>;
    requestDeserialize: grpc.deserialize<user_pb.SuperUser>;
    responseSerialize: grpc.serialize<super_user_service_pb.SuperUserResponse>;
    responseDeserialize: grpc.deserialize<super_user_service_pb.SuperUserResponse>;
}
interface ISuperUserServiceService_IGet extends grpc.MethodDefinition<user_pb.GetRequest, super_user_service_pb.SuperUserResponse> {
    path: "/user_service.SuperUserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<super_user_service_pb.SuperUserResponse>;
    responseDeserialize: grpc.deserialize<super_user_service_pb.SuperUserResponse>;
}
interface ISuperUserServiceService_IFind extends grpc.MethodDefinition<user_pb.FindRequest, super_user_service_pb.SuperUsersResponse> {
    path: "/user_service.SuperUserService/Find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.FindRequest>;
    requestDeserialize: grpc.deserialize<user_pb.FindRequest>;
    responseSerialize: grpc.serialize<super_user_service_pb.SuperUsersResponse>;
    responseDeserialize: grpc.deserialize<super_user_service_pb.SuperUsersResponse>;
}
interface ISuperUserServiceService_IUpdate extends grpc.MethodDefinition<user_pb.SuperUser, super_user_service_pb.SuperUserResponse> {
    path: "/user_service.SuperUserService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SuperUser>;
    requestDeserialize: grpc.deserialize<user_pb.SuperUser>;
    responseSerialize: grpc.serialize<super_user_service_pb.SuperUserResponse>;
    responseDeserialize: grpc.deserialize<super_user_service_pb.SuperUserResponse>;
}
interface ISuperUserServiceService_IDelete extends grpc.MethodDefinition<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/user_service.SuperUserService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISuperUserServiceService_IGetByCredentials extends grpc.MethodDefinition<user_pb.GetByCredentialsRequest, super_user_service_pb.SuperUserResponse> {
    path: "/user_service.SuperUserService/GetByCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByCredentialsRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByCredentialsRequest>;
    responseSerialize: grpc.serialize<super_user_service_pb.SuperUserResponse>;
    responseDeserialize: grpc.deserialize<super_user_service_pb.SuperUserResponse>;
}

export const SuperUserServiceService: ISuperUserServiceService;

export interface ISuperUserServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<user_pb.SuperUser, super_user_service_pb.SuperUserResponse>;
    get: grpc.handleUnaryCall<user_pb.GetRequest, super_user_service_pb.SuperUserResponse>;
    find: grpc.handleUnaryCall<user_pb.FindRequest, super_user_service_pb.SuperUsersResponse>;
    update: grpc.handleUnaryCall<user_pb.SuperUser, super_user_service_pb.SuperUserResponse>;
    delete: grpc.handleUnaryCall<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
    getByCredentials: grpc.handleUnaryCall<user_pb.GetByCredentialsRequest, super_user_service_pb.SuperUserResponse>;
}

export interface ISuperUserServiceClient {
    create(request: user_pb.SuperUser, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.SuperUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.SuperUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SuperUser, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SuperUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.SuperUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
}

export class SuperUserServiceClient extends grpc.Client implements ISuperUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: user_pb.SuperUser, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.SuperUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.SuperUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUsersResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SuperUser, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SuperUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.SuperUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: super_user_service_pb.SuperUserResponse) => void): grpc.ClientUnaryCall;
}
