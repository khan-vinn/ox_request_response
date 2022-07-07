// package: user_service
// file: customer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

export class GetInactiveCustomersRequest extends jspb.Message { 
    clearCustomerIdsList(): void;
    getCustomerIdsList(): Array<string>;
    setCustomerIdsList(value: Array<string>): GetInactiveCustomersRequest;
    addCustomerIds(value: string, index?: number): string;
    getOffset(): number;
    setOffset(value: number): GetInactiveCustomersRequest;
    getLimit(): number;
    setLimit(value: number): GetInactiveCustomersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInactiveCustomersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInactiveCustomersRequest): GetInactiveCustomersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInactiveCustomersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInactiveCustomersRequest;
    static deserializeBinaryFromReader(message: GetInactiveCustomersRequest, reader: jspb.BinaryReader): GetInactiveCustomersRequest;
}

export namespace GetInactiveCustomersRequest {
    export type AsObject = {
        customerIdsList: Array<string>,
        offset: number,
        limit: number,
    }
}

export class CustomerResponse extends jspb.Message { 

    hasCustomer(): boolean;
    clearCustomer(): void;
    getCustomer(): user_pb.Customer | undefined;
    setCustomer(value?: user_pb.Customer): CustomerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerResponse): CustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerResponse;
    static deserializeBinaryFromReader(message: CustomerResponse, reader: jspb.BinaryReader): CustomerResponse;
}

export namespace CustomerResponse {
    export type AsObject = {
        customer?: user_pb.Customer.AsObject,
    }
}

export class CustomersResponse extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<user_pb.Customer>;
    setCustomersList(value: Array<user_pb.Customer>): CustomersResponse;
    addCustomers(value?: user_pb.Customer, index?: number): user_pb.Customer;
    getCount(): number;
    setCount(value: number): CustomersResponse;
    getAll(): number;
    setAll(value: number): CustomersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersResponse): CustomersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersResponse;
    static deserializeBinaryFromReader(message: CustomersResponse, reader: jspb.BinaryReader): CustomersResponse;
}

export namespace CustomersResponse {
    export type AsObject = {
        customersList: Array<user_pb.Customer.AsObject>,
        count: number,
        all: number,
    }
}

export class AddBalanceRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): AddBalanceRequest;
    getAmount(): number;
    setAmount(value: number): AddBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddBalanceRequest): AddBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddBalanceRequest;
    static deserializeBinaryFromReader(message: AddBalanceRequest, reader: jspb.BinaryReader): AddBalanceRequest;
}

export namespace AddBalanceRequest {
    export type AsObject = {
        userId: string,
        amount: number,
    }
}

export class AddBalanceResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): AddBalanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddBalanceResponse): AddBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddBalanceResponse;
    static deserializeBinaryFromReader(message: AddBalanceResponse, reader: jspb.BinaryReader): AddBalanceResponse;
}

export namespace AddBalanceResponse {
    export type AsObject = {
        userId: string,
    }
}
