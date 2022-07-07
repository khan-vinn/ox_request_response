// package: user_service
// file: super_user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

export class SuperUserResponse extends jspb.Message { 

    hasSuperUser(): boolean;
    clearSuperUser(): void;
    getSuperUser(): user_pb.SuperUser | undefined;
    setSuperUser(value?: user_pb.SuperUser): SuperUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuperUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SuperUserResponse): SuperUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuperUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuperUserResponse;
    static deserializeBinaryFromReader(message: SuperUserResponse, reader: jspb.BinaryReader): SuperUserResponse;
}

export namespace SuperUserResponse {
    export type AsObject = {
        superUser?: user_pb.SuperUser.AsObject,
    }
}

export class SuperUsersResponse extends jspb.Message { 
    clearSuperUsersList(): void;
    getSuperUsersList(): Array<user_pb.SuperUser>;
    setSuperUsersList(value: Array<user_pb.SuperUser>): SuperUsersResponse;
    addSuperUsers(value?: user_pb.SuperUser, index?: number): user_pb.SuperUser;
    getCount(): number;
    setCount(value: number): SuperUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuperUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SuperUsersResponse): SuperUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuperUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuperUsersResponse;
    static deserializeBinaryFromReader(message: SuperUsersResponse, reader: jspb.BinaryReader): SuperUsersResponse;
}

export namespace SuperUsersResponse {
    export type AsObject = {
        superUsersList: Array<user_pb.SuperUser.AsObject>,
        count: number,
    }
}
