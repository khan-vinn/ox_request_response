// package: question_response_service
// file: questionary_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as questionary_service_pb from "./questionary_service_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface ISurveysService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSurveys: ISurveysService_IGetSurveys;
}

interface ISurveysService_IGetSurveys extends grpc.MethodDefinition<questionary_service_pb.GetSurveysRequest, questionary_service_pb.GetSurveysResponse> {
    path: "/question_response_service.Surveys/GetSurveys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<questionary_service_pb.GetSurveysRequest>;
    requestDeserialize: grpc.deserialize<questionary_service_pb.GetSurveysRequest>;
    responseSerialize: grpc.serialize<questionary_service_pb.GetSurveysResponse>;
    responseDeserialize: grpc.deserialize<questionary_service_pb.GetSurveysResponse>;
}

export const SurveysService: ISurveysService;

export interface ISurveysServer extends grpc.UntypedServiceImplementation {
    getSurveys: grpc.handleUnaryCall<questionary_service_pb.GetSurveysRequest, questionary_service_pb.GetSurveysResponse>;
}

export interface ISurveysClient {
    getSurveys(request: questionary_service_pb.GetSurveysRequest, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
    getSurveys(request: questionary_service_pb.GetSurveysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
    getSurveys(request: questionary_service_pb.GetSurveysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
}

export class SurveysClient extends grpc.Client implements ISurveysClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSurveys(request: questionary_service_pb.GetSurveysRequest, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
    public getSurveys(request: questionary_service_pb.GetSurveysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
    public getSurveys(request: questionary_service_pb.GetSurveysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: questionary_service_pb.GetSurveysResponse) => void): grpc.ClientUnaryCall;
}
