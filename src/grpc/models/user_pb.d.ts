// package: user_service
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class File extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): File;
    getUrl(): string;
    setUrl(value: string): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        uuid: string,
        url: string,
    }
}

export class SuperUser extends jspb.Message { 
    getId(): string;
    setId(value: string): SuperUser;
    getLogin(): string;
    setLogin(value: string): SuperUser;
    getPassword(): string;
    setPassword(value: string): SuperUser;
    getUserRoleId(): string;
    setUserRoleId(value: string): SuperUser;
    getName(): string;
    setName(value: string): SuperUser;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): File | undefined;
    setImage(value?: File): SuperUser;
    getActive(): boolean;
    setActive(value: boolean): SuperUser;
    getCreatedAt(): string;
    setCreatedAt(value: string): SuperUser;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): SuperUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuperUser.AsObject;
    static toObject(includeInstance: boolean, msg: SuperUser): SuperUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuperUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuperUser;
    static deserializeBinaryFromReader(message: SuperUser, reader: jspb.BinaryReader): SuperUser;
}

export namespace SuperUser {
    export type AsObject = {
        id: string,
        login: string,
        password: string,
        userRoleId: string,
        name: string,
        image?: File.AsObject,
        active: boolean,
        createdAt: string,
        updatedAt: string,
    }
}

export class SystemUser extends jspb.Message { 
    getId(): string;
    setId(value: string): SystemUser;
    getLogin(): string;
    setLogin(value: string): SystemUser;
    getPassword(): string;
    setPassword(value: string): SystemUser;
    getUserRoleId(): string;
    setUserRoleId(value: string): SystemUser;
    getName(): string;
    setName(value: string): SystemUser;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): File | undefined;
    setImage(value?: File): SystemUser;
    getActive(): boolean;
    setActive(value: boolean): SystemUser;
    getCreatedAt(): string;
    setCreatedAt(value: string): SystemUser;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): SystemUser;
    getEmail(): string;
    setEmail(value: string): SystemUser;
    getCompanyName(): string;
    setCompanyName(value: string): SystemUser;
    getCompanyPosition(): string;
    setCompanyPosition(value: string): SystemUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemUser.AsObject;
    static toObject(includeInstance: boolean, msg: SystemUser): SystemUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemUser;
    static deserializeBinaryFromReader(message: SystemUser, reader: jspb.BinaryReader): SystemUser;
}

export namespace SystemUser {
    export type AsObject = {
        id: string,
        login: string,
        password: string,
        userRoleId: string,
        name: string,
        image?: File.AsObject,
        active: boolean,
        createdAt: string,
        updatedAt: string,
        email: string,
        companyName: string,
        companyPosition: string,
    }
}

export class SystemUserSlim extends jspb.Message { 
    getId(): string;
    setId(value: string): SystemUserSlim;
    getName(): string;
    setName(value: string): SystemUserSlim;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): File | undefined;
    setImage(value?: File): SystemUserSlim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemUserSlim.AsObject;
    static toObject(includeInstance: boolean, msg: SystemUserSlim): SystemUserSlim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemUserSlim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemUserSlim;
    static deserializeBinaryFromReader(message: SystemUserSlim, reader: jspb.BinaryReader): SystemUserSlim;
}

export namespace SystemUserSlim {
    export type AsObject = {
        id: string,
        name: string,
        image?: File.AsObject,
    }
}

export class UpdateLoginRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateLoginRequest;
    getLogin(): string;
    setLogin(value: string): UpdateLoginRequest;
    getPassword(): string;
    setPassword(value: string): UpdateLoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoginRequest): UpdateLoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoginRequest;
    static deserializeBinaryFromReader(message: UpdateLoginRequest, reader: jspb.BinaryReader): UpdateLoginRequest;
}

export namespace UpdateLoginRequest {
    export type AsObject = {
        id: string,
        login: string,
        password: string,
    }
}

export class PasswordResetSystemUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): PasswordResetSystemUserRequest;
    getPassword(): string;
    setPassword(value: string): PasswordResetSystemUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PasswordResetSystemUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PasswordResetSystemUserRequest): PasswordResetSystemUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PasswordResetSystemUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PasswordResetSystemUserRequest;
    static deserializeBinaryFromReader(message: PasswordResetSystemUserRequest, reader: jspb.BinaryReader): PasswordResetSystemUserRequest;
}

export namespace PasswordResetSystemUserRequest {
    export type AsObject = {
        id: string,
        password: string,
    }
}

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getFirstname(): string;
    setFirstname(value: string): Customer;
    getLastname(): string;
    setLastname(value: string): Customer;
    getPhone(): string;
    setPhone(value: string): Customer;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): File | undefined;
    setImage(value?: File): Customer;
    getEmail(): string;
    setEmail(value: string): Customer;
    getPassword(): string;
    setPassword(value: string): Customer;
    getBalance(): number;
    setBalance(value: number): Customer;
    getCountry(): string;
    setCountry(value: string): Customer;
    getRegion(): string;
    setRegion(value: string): Customer;
    getCity(): string;
    setCity(value: string): Customer;
    getDob(): string;
    setDob(value: string): Customer;
    getGender(): string;
    setGender(value: string): Customer;
    getLanguage(): string;
    setLanguage(value: string): Customer;
    getActive(): boolean;
    setActive(value: boolean): Customer;
    getCreatedAt(): string;
    setCreatedAt(value: string): Customer;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Customer;
    getLoginAt(): string;
    setLoginAt(value: string): Customer;
    getOperatorId(): string;
    setOperatorId(value: string): Customer;
    getIsOperator(): boolean;
    setIsOperator(value: boolean): Customer;
    getLogin(): string;
    setLogin(value: string): Customer;
    getUsername(): string;
    setUsername(value: string): Customer;
    getFsmToken(): string;
    setFsmToken(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
        firstname: string,
        lastname: string,
        phone: string,
        image?: File.AsObject,
        email: string,
        password: string,
        balance: number,
        country: string,
        region: string,
        city: string,
        dob: string,
        gender: string,
        language: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
        loginAt: string,
        operatorId: string,
        isOperator: boolean,
        login: string,
        username: string,
        fsmToken: string,
    }
}

export class GetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        id: string,
    }
}

export class FindRequest extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): FindRequest;
    getLimit(): number;
    setLimit(value: number): FindRequest;
    getSearch(): string;
    setSearch(value: string): FindRequest;
    getActive(): boolean;
    setActive(value: boolean): FindRequest;
    getInactive(): boolean;
    setInactive(value: boolean): FindRequest;
    getPhone(): string;
    setPhone(value: string): FindRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindRequest): FindRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindRequest;
    static deserializeBinaryFromReader(message: FindRequest, reader: jspb.BinaryReader): FindRequest;
}

export namespace FindRequest {
    export type AsObject = {
        offset: number,
        limit: number,
        search: string,
        active: boolean,
        inactive: boolean,
        phone: string,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetByCredentialsRequest extends jspb.Message { 
    getLogin(): string;
    setLogin(value: string): GetByCredentialsRequest;
    getPassword(): string;
    setPassword(value: string): GetByCredentialsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByCredentialsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByCredentialsRequest): GetByCredentialsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByCredentialsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByCredentialsRequest;
    static deserializeBinaryFromReader(message: GetByCredentialsRequest, reader: jspb.BinaryReader): GetByCredentialsRequest;
}

export namespace GetByCredentialsRequest {
    export type AsObject = {
        login: string,
        password: string,
    }
}

export class GetByLoginRequest extends jspb.Message { 
    getLogin(): string;
    setLogin(value: string): GetByLoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByLoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByLoginRequest): GetByLoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByLoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByLoginRequest;
    static deserializeBinaryFromReader(message: GetByLoginRequest, reader: jspb.BinaryReader): GetByLoginRequest;
}

export namespace GetByLoginRequest {
    export type AsObject = {
        login: string,
    }
}

export class GetByPhoneRequest extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): GetByPhoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByPhoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByPhoneRequest): GetByPhoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByPhoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByPhoneRequest;
    static deserializeBinaryFromReader(message: GetByPhoneRequest, reader: jspb.BinaryReader): GetByPhoneRequest;
}

export namespace GetByPhoneRequest {
    export type AsObject = {
        phone: string,
    }
}

export class GetByEmailRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetByEmailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByEmailRequest): GetByEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByEmailRequest;
    static deserializeBinaryFromReader(message: GetByEmailRequest, reader: jspb.BinaryReader): GetByEmailRequest;
}

export namespace GetByEmailRequest {
    export type AsObject = {
        email: string,
    }
}
