// package: question_response_service
// file: questionary_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetSurveysRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetSurveysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSurveysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSurveysRequest): GetSurveysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSurveysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSurveysRequest;
    static deserializeBinaryFromReader(message: GetSurveysRequest, reader: jspb.BinaryReader): GetSurveysRequest;
}

export namespace GetSurveysRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetSurveysResponse extends jspb.Message { 
    clearUncompletedSurveysList(): void;
    getUncompletedSurveysList(): Array<UncompletedSurveys>;
    setUncompletedSurveysList(value: Array<UncompletedSurveys>): GetSurveysResponse;
    addUncompletedSurveys(value?: UncompletedSurveys, index?: number): UncompletedSurveys;
    clearNewSurveysList(): void;
    getNewSurveysList(): Array<NewSurveys>;
    setNewSurveysList(value: Array<NewSurveys>): GetSurveysResponse;
    addNewSurveys(value?: NewSurveys, index?: number): NewSurveys;
    clearFullquotaSurveysList(): void;
    getFullquotaSurveysList(): Array<FullQuotaSurveys>;
    setFullquotaSurveysList(value: Array<FullQuotaSurveys>): GetSurveysResponse;
    addFullquotaSurveys(value?: FullQuotaSurveys, index?: number): FullQuotaSurveys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSurveysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSurveysResponse): GetSurveysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSurveysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSurveysResponse;
    static deserializeBinaryFromReader(message: GetSurveysResponse, reader: jspb.BinaryReader): GetSurveysResponse;
}

export namespace GetSurveysResponse {
    export type AsObject = {
        uncompletedSurveysList: Array<UncompletedSurveys.AsObject>,
        newSurveysList: Array<NewSurveys.AsObject>,
        fullquotaSurveysList: Array<FullQuotaSurveys.AsObject>,
    }
}

export class FullQuotaSurveys extends jspb.Message { 
    getId(): string;
    setId(value: string): FullQuotaSurveys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullQuotaSurveys.AsObject;
    static toObject(includeInstance: boolean, msg: FullQuotaSurveys): FullQuotaSurveys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullQuotaSurveys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullQuotaSurveys;
    static deserializeBinaryFromReader(message: FullQuotaSurveys, reader: jspb.BinaryReader): FullQuotaSurveys;
}

export namespace FullQuotaSurveys {
    export type AsObject = {
        id: string,
    }
}

export class UncompletedSurveys extends jspb.Message { 
    getId(): string;
    setId(value: string): UncompletedSurveys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UncompletedSurveys.AsObject;
    static toObject(includeInstance: boolean, msg: UncompletedSurveys): UncompletedSurveys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UncompletedSurveys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UncompletedSurveys;
    static deserializeBinaryFromReader(message: UncompletedSurveys, reader: jspb.BinaryReader): UncompletedSurveys;
}

export namespace UncompletedSurveys {
    export type AsObject = {
        id: string,
    }
}

export class NewSurveys extends jspb.Message { 
    getId(): string;
    setId(value: string): NewSurveys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSurveys.AsObject;
    static toObject(includeInstance: boolean, msg: NewSurveys): NewSurveys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSurveys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSurveys;
    static deserializeBinaryFromReader(message: NewSurveys, reader: jspb.BinaryReader): NewSurveys;
}

export namespace NewSurveys {
    export type AsObject = {
        id: string,
    }
}
