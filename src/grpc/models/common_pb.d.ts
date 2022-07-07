// package: questionary_service
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreatePicture extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): CreatePicture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePicture.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePicture): CreatePicture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePicture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePicture;
    static deserializeBinaryFromReader(message: CreatePicture, reader: jspb.BinaryReader): CreatePicture;
}

export namespace CreatePicture {
    export type AsObject = {
        uuid: string,
    }
}

export class ProjectLanguage extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): ProjectLanguage;
    getLanguage(): string;
    setLanguage(value: string): ProjectLanguage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectLanguage): ProjectLanguage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectLanguage;
    static deserializeBinaryFromReader(message: ProjectLanguage, reader: jspb.BinaryReader): ProjectLanguage;
}

export namespace ProjectLanguage {
    export type AsObject = {
        isActive: boolean,
        language: string,
    }
}

export class CreateResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        id: string,
    }
}
