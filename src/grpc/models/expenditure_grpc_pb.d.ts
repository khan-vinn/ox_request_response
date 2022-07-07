// package: question_response_service
// file: expenditure.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as expenditure_pb from "./expenditure_pb";

interface IExpenditureService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addExpenditure: IExpenditureService_IAddExpenditure;
    getExpenditure: IExpenditureService_IGetExpenditure;
    getQuestionFirst: IExpenditureService_IGetQuestionFirst;
    listByUsers: IExpenditureService_IListByUsers;
    printHello: IExpenditureService_IPrintHello;
}

interface IExpenditureService_IAddExpenditure extends grpc.MethodDefinition<expenditure_pb.AddExpenditureRequest, expenditure_pb.AddExpenditureResponse> {
    path: "/question_response_service.Expenditure/AddExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<expenditure_pb.AddExpenditureRequest>;
    requestDeserialize: grpc.deserialize<expenditure_pb.AddExpenditureRequest>;
    responseSerialize: grpc.serialize<expenditure_pb.AddExpenditureResponse>;
    responseDeserialize: grpc.deserialize<expenditure_pb.AddExpenditureResponse>;
}
interface IExpenditureService_IGetExpenditure extends grpc.MethodDefinition<expenditure_pb.GetExpenditureRequest, expenditure_pb.GetExpenditureResponse> {
    path: "/question_response_service.Expenditure/GetExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<expenditure_pb.GetExpenditureRequest>;
    requestDeserialize: grpc.deserialize<expenditure_pb.GetExpenditureRequest>;
    responseSerialize: grpc.serialize<expenditure_pb.GetExpenditureResponse>;
    responseDeserialize: grpc.deserialize<expenditure_pb.GetExpenditureResponse>;
}
interface IExpenditureService_IGetQuestionFirst extends grpc.MethodDefinition<expenditure_pb.Str, expenditure_pb.Str> {
    path: "/question_response_service.Expenditure/GetQuestionFirst";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<expenditure_pb.Str>;
    requestDeserialize: grpc.deserialize<expenditure_pb.Str>;
    responseSerialize: grpc.serialize<expenditure_pb.Str>;
    responseDeserialize: grpc.deserialize<expenditure_pb.Str>;
}
interface IExpenditureService_IListByUsers extends grpc.MethodDefinition<expenditure_pb.ListByUsersReq, expenditure_pb.Str> {
    path: "/question_response_service.Expenditure/ListByUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<expenditure_pb.ListByUsersReq>;
    requestDeserialize: grpc.deserialize<expenditure_pb.ListByUsersReq>;
    responseSerialize: grpc.serialize<expenditure_pb.Str>;
    responseDeserialize: grpc.deserialize<expenditure_pb.Str>;
}
interface IExpenditureService_IPrintHello extends grpc.MethodDefinition<expenditure_pb.Str, expenditure_pb.Str> {
    path: "/question_response_service.Expenditure/PrintHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<expenditure_pb.Str>;
    requestDeserialize: grpc.deserialize<expenditure_pb.Str>;
    responseSerialize: grpc.serialize<expenditure_pb.Str>;
    responseDeserialize: grpc.deserialize<expenditure_pb.Str>;
}

export const ExpenditureService: IExpenditureService;

export interface IExpenditureServer extends grpc.UntypedServiceImplementation {
    addExpenditure: grpc.handleUnaryCall<expenditure_pb.AddExpenditureRequest, expenditure_pb.AddExpenditureResponse>;
    getExpenditure: grpc.handleUnaryCall<expenditure_pb.GetExpenditureRequest, expenditure_pb.GetExpenditureResponse>;
    getQuestionFirst: grpc.handleUnaryCall<expenditure_pb.Str, expenditure_pb.Str>;
    listByUsers: grpc.handleUnaryCall<expenditure_pb.ListByUsersReq, expenditure_pb.Str>;
    printHello: grpc.handleUnaryCall<expenditure_pb.Str, expenditure_pb.Str>;
}

export interface IExpenditureClient {
    addExpenditure(request: expenditure_pb.AddExpenditureRequest, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    addExpenditure(request: expenditure_pb.AddExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    addExpenditure(request: expenditure_pb.AddExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    getExpenditure(request: expenditure_pb.GetExpenditureRequest, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    getExpenditure(request: expenditure_pb.GetExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    getExpenditure(request: expenditure_pb.GetExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    getQuestionFirst(request: expenditure_pb.Str, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    getQuestionFirst(request: expenditure_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    getQuestionFirst(request: expenditure_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    listByUsers(request: expenditure_pb.ListByUsersReq, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    listByUsers(request: expenditure_pb.ListByUsersReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    listByUsers(request: expenditure_pb.ListByUsersReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    printHello(request: expenditure_pb.Str, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    printHello(request: expenditure_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    printHello(request: expenditure_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
}

export class ExpenditureClient extends grpc.Client implements IExpenditureClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addExpenditure(request: expenditure_pb.AddExpenditureRequest, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    public addExpenditure(request: expenditure_pb.AddExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    public addExpenditure(request: expenditure_pb.AddExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.AddExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getExpenditure(request: expenditure_pb.GetExpenditureRequest, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getExpenditure(request: expenditure_pb.GetExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getExpenditure(request: expenditure_pb.GetExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.GetExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getQuestionFirst(request: expenditure_pb.Str, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public getQuestionFirst(request: expenditure_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public getQuestionFirst(request: expenditure_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public listByUsers(request: expenditure_pb.ListByUsersReq, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public listByUsers(request: expenditure_pb.ListByUsersReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public listByUsers(request: expenditure_pb.ListByUsersReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public printHello(request: expenditure_pb.Str, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public printHello(request: expenditure_pb.Str, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
    public printHello(request: expenditure_pb.Str, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: expenditure_pb.Str) => void): grpc.ClientUnaryCall;
}
