// package: question_response_service
// file: expenditure.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListByUsersReq extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ListByUsersReq;
    getSurveyId(): string;
    setSurveyId(value: string): ListByUsersReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListByUsersReq.AsObject;
    static toObject(includeInstance: boolean, msg: ListByUsersReq): ListByUsersReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListByUsersReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListByUsersReq;
    static deserializeBinaryFromReader(message: ListByUsersReq, reader: jspb.BinaryReader): ListByUsersReq;
}

export namespace ListByUsersReq {
    export type AsObject = {
        userId: string,
        surveyId: string,
    }
}

export class Str extends jspb.Message { 
    getData(): string;
    setData(value: string): Str;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Str.AsObject;
    static toObject(includeInstance: boolean, msg: Str): Str.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Str, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Str;
    static deserializeBinaryFromReader(message: Str, reader: jspb.BinaryReader): Str;
}

export namespace Str {
    export type AsObject = {
        data: string,
    }
}

export class Data extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class AddExpenditureRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): AddExpenditureRequest;
    getScore(): number;
    setScore(value: number): AddExpenditureRequest;
    getTitle(): string;
    setTitle(value: string): AddExpenditureRequest;
    getType(): string;
    setType(value: string): AddExpenditureRequest;
    getReceiver(): string;
    setReceiver(value: string): AddExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddExpenditureRequest): AddExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddExpenditureRequest;
    static deserializeBinaryFromReader(message: AddExpenditureRequest, reader: jspb.BinaryReader): AddExpenditureRequest;
}

export namespace AddExpenditureRequest {
    export type AsObject = {
        userId: string,
        score: number,
        title: string,
        type: string,
        receiver: string,
    }
}

export class AddExpenditureResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): AddExpenditureResponse;
    getId(): string;
    setId(value: string): AddExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddExpenditureResponse): AddExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddExpenditureResponse;
    static deserializeBinaryFromReader(message: AddExpenditureResponse, reader: jspb.BinaryReader): AddExpenditureResponse;
}

export namespace AddExpenditureResponse {
    export type AsObject = {
        status: string,
        id: string,
    }
}

export class GetExpenditureRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetExpenditureRequest): GetExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetExpenditureRequest;
    static deserializeBinaryFromReader(message: GetExpenditureRequest, reader: jspb.BinaryReader): GetExpenditureRequest;
}

export namespace GetExpenditureRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetExpenditureResponse extends jspb.Message { 
    clearExpenditureList(): void;
    getExpenditureList(): Array<AllExpenditure>;
    setExpenditureList(value: Array<AllExpenditure>): GetExpenditureResponse;
    addExpenditure(value?: AllExpenditure, index?: number): AllExpenditure;
    getSummexpenditure(): number;
    setSummexpenditure(value: number): GetExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetExpenditureResponse): GetExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetExpenditureResponse;
    static deserializeBinaryFromReader(message: GetExpenditureResponse, reader: jspb.BinaryReader): GetExpenditureResponse;
}

export namespace GetExpenditureResponse {
    export type AsObject = {
        expenditureList: Array<AllExpenditure.AsObject>,
        summexpenditure: number,
    }
}

export class AllExpenditure extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): AllExpenditure;
    getScore(): number;
    setScore(value: number): AllExpenditure;
    getTitle(): string;
    setTitle(value: string): AllExpenditure;
    getExpend(): boolean;
    setExpend(value: boolean): AllExpenditure;
    getCreatedAt(): number;
    setCreatedAt(value: number): AllExpenditure;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllExpenditure.AsObject;
    static toObject(includeInstance: boolean, msg: AllExpenditure): AllExpenditure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllExpenditure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllExpenditure;
    static deserializeBinaryFromReader(message: AllExpenditure, reader: jspb.BinaryReader): AllExpenditure;
}

export namespace AllExpenditure {
    export type AsObject = {
        userId: string,
        score: number,
        title: string,
        expend: boolean,
        createdAt: number,
    }
}
