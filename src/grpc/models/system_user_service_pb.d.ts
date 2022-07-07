// package: user_service
// file: system_user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

export class AssignProject extends jspb.Message { 
    getId(): string;
    setId(value: string): AssignProject;
    getSystemUserId(): string;
    setSystemUserId(value: string): AssignProject;
    getProjectId(): string;
    setProjectId(value: string): AssignProject;
    getCreatedAt(): string;
    setCreatedAt(value: string): AssignProject;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): AssignProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignProject.AsObject;
    static toObject(includeInstance: boolean, msg: AssignProject): AssignProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignProject;
    static deserializeBinaryFromReader(message: AssignProject, reader: jspb.BinaryReader): AssignProject;
}

export namespace AssignProject {
    export type AsObject = {
        id: string,
        systemUserId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class AssignProjectResponce extends jspb.Message { 

    hasAssignproject(): boolean;
    clearAssignproject(): void;
    getAssignproject(): AssignProject | undefined;
    setAssignproject(value?: AssignProject): AssignProjectResponce;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignProjectResponce.AsObject;
    static toObject(includeInstance: boolean, msg: AssignProjectResponce): AssignProjectResponce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignProjectResponce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignProjectResponce;
    static deserializeBinaryFromReader(message: AssignProjectResponce, reader: jspb.BinaryReader): AssignProjectResponce;
}

export namespace AssignProjectResponce {
    export type AsObject = {
        assignproject?: AssignProject.AsObject,
    }
}

export class AssignedProjects extends jspb.Message { 
    clearAssignedprojetsList(): void;
    getAssignedprojetsList(): Array<AssignProject>;
    setAssignedprojetsList(value: Array<AssignProject>): AssignedProjects;
    addAssignedprojets(value?: AssignProject, index?: number): AssignProject;
    getCount(): number;
    setCount(value: number): AssignedProjects;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignedProjects.AsObject;
    static toObject(includeInstance: boolean, msg: AssignedProjects): AssignedProjects.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignedProjects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignedProjects;
    static deserializeBinaryFromReader(message: AssignedProjects, reader: jspb.BinaryReader): AssignedProjects;
}

export namespace AssignedProjects {
    export type AsObject = {
        assignedprojetsList: Array<AssignProject.AsObject>,
        count: number,
    }
}

export class SystemUserResponse extends jspb.Message { 

    hasSystemUser(): boolean;
    clearSystemUser(): void;
    getSystemUser(): user_pb.SystemUser | undefined;
    setSystemUser(value?: user_pb.SystemUser): SystemUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SystemUserResponse): SystemUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemUserResponse;
    static deserializeBinaryFromReader(message: SystemUserResponse, reader: jspb.BinaryReader): SystemUserResponse;
}

export namespace SystemUserResponse {
    export type AsObject = {
        systemUser?: user_pb.SystemUser.AsObject,
    }
}

export class SystemUserSlimResponse extends jspb.Message { 

    hasSystemUser(): boolean;
    clearSystemUser(): void;
    getSystemUser(): user_pb.SystemUserSlim | undefined;
    setSystemUser(value?: user_pb.SystemUserSlim): SystemUserSlimResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemUserSlimResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SystemUserSlimResponse): SystemUserSlimResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemUserSlimResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemUserSlimResponse;
    static deserializeBinaryFromReader(message: SystemUserSlimResponse, reader: jspb.BinaryReader): SystemUserSlimResponse;
}

export namespace SystemUserSlimResponse {
    export type AsObject = {
        systemUser?: user_pb.SystemUserSlim.AsObject,
    }
}

export class SystemUsersResponse extends jspb.Message { 
    clearSystemUsersList(): void;
    getSystemUsersList(): Array<user_pb.SystemUser>;
    setSystemUsersList(value: Array<user_pb.SystemUser>): SystemUsersResponse;
    addSystemUsers(value?: user_pb.SystemUser, index?: number): user_pb.SystemUser;
    getCount(): number;
    setCount(value: number): SystemUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SystemUsersResponse): SystemUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemUsersResponse;
    static deserializeBinaryFromReader(message: SystemUsersResponse, reader: jspb.BinaryReader): SystemUsersResponse;
}

export namespace SystemUsersResponse {
    export type AsObject = {
        systemUsersList: Array<user_pb.SystemUser.AsObject>,
        count: number,
    }
}

export class GetByLoginSystemUserRequest extends jspb.Message { 
    getLogin(): string;
    setLogin(value: string): GetByLoginSystemUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByLoginSystemUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByLoginSystemUserRequest): GetByLoginSystemUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByLoginSystemUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByLoginSystemUserRequest;
    static deserializeBinaryFromReader(message: GetByLoginSystemUserRequest, reader: jspb.BinaryReader): GetByLoginSystemUserRequest;
}

export namespace GetByLoginSystemUserRequest {
    export type AsObject = {
        login: string,
    }
}

export class GetByEmailSystemUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetByEmailSystemUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByEmailSystemUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByEmailSystemUserRequest): GetByEmailSystemUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByEmailSystemUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByEmailSystemUserRequest;
    static deserializeBinaryFromReader(message: GetByEmailSystemUserRequest, reader: jspb.BinaryReader): GetByEmailSystemUserRequest;
}

export namespace GetByEmailSystemUserRequest {
    export type AsObject = {
        email: string,
    }
}
