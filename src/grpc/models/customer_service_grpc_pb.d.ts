// package: user_service
// file: customer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as customer_service_pb from "./customer_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ICustomerServiceService_ICreate;
    createOperator: ICustomerServiceService_ICreateOperator;
    createWithPhone: ICustomerServiceService_ICreateWithPhone;
    createWithEmail: ICustomerServiceService_ICreateWithEmail;
    get: ICustomerServiceService_IGet;
    find: ICustomerServiceService_IFind;
    findOperator: ICustomerServiceService_IFindOperator;
    update: ICustomerServiceService_IUpdate;
    updateOperator: ICustomerServiceService_IUpdateOperator;
    updatePassword: ICustomerServiceService_IUpdatePassword;
    updatePhone: ICustomerServiceService_IUpdatePhone;
    delete: ICustomerServiceService_IDelete;
    getByPhone: ICustomerServiceService_IGetByPhone;
    getByEmail: ICustomerServiceService_IGetByEmail;
    getInactiveCustomers: ICustomerServiceService_IGetInactiveCustomers;
    updateLoginAt: ICustomerServiceService_IUpdateLoginAt;
    getByCredentials: ICustomerServiceService_IGetByCredentials;
    getOperatorByCredentials: ICustomerServiceService_IGetOperatorByCredentials;
    addBalance: ICustomerServiceService_IAddBalance;
}

interface ICustomerServiceService_ICreate extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_ICreateOperator extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/CreateOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_ICreateWithPhone extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/CreateWithPhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_ICreateWithEmail extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/CreateWithEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IGet extends grpc.MethodDefinition<user_pb.GetRequest, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IFind extends grpc.MethodDefinition<user_pb.FindRequest, customer_service_pb.CustomersResponse> {
    path: "/user_service.CustomerService/Find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.FindRequest>;
    requestDeserialize: grpc.deserialize<user_pb.FindRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomersResponse>;
}
interface ICustomerServiceService_IFindOperator extends grpc.MethodDefinition<user_pb.FindRequest, customer_service_pb.CustomersResponse> {
    path: "/user_service.CustomerService/FindOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.FindRequest>;
    requestDeserialize: grpc.deserialize<user_pb.FindRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomersResponse>;
}
interface ICustomerServiceService_IUpdate extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IUpdateOperator extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/UpdateOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IUpdatePassword extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/UpdatePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IUpdatePhone extends grpc.MethodDefinition<user_pb.Customer, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/UpdatePhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Customer>;
    requestDeserialize: grpc.deserialize<user_pb.Customer>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IDelete extends grpc.MethodDefinition<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/user_service.CustomerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICustomerServiceService_IGetByPhone extends grpc.MethodDefinition<user_pb.GetByPhoneRequest, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/GetByPhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByPhoneRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByPhoneRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IGetByEmail extends grpc.MethodDefinition<user_pb.GetByEmailRequest, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/GetByEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByEmailRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByEmailRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IGetInactiveCustomers extends grpc.MethodDefinition<customer_service_pb.GetInactiveCustomersRequest, customer_service_pb.CustomersResponse> {
    path: "/user_service.CustomerService/GetInactiveCustomers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customer_service_pb.GetInactiveCustomersRequest>;
    requestDeserialize: grpc.deserialize<customer_service_pb.GetInactiveCustomersRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomersResponse>;
}
interface ICustomerServiceService_IUpdateLoginAt extends grpc.MethodDefinition<user_pb.GetRequest, google_protobuf_empty_pb.Empty> {
    path: "/user_service.CustomerService/UpdateLoginAt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICustomerServiceService_IGetByCredentials extends grpc.MethodDefinition<user_pb.GetByCredentialsRequest, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/GetByCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByCredentialsRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByCredentialsRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IGetOperatorByCredentials extends grpc.MethodDefinition<user_pb.GetByCredentialsRequest, customer_service_pb.CustomerResponse> {
    path: "/user_service.CustomerService/GetOperatorByCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetByCredentialsRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetByCredentialsRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.CustomerResponse>;
}
interface ICustomerServiceService_IAddBalance extends grpc.MethodDefinition<customer_service_pb.AddBalanceRequest, customer_service_pb.AddBalanceResponse> {
    path: "/user_service.CustomerService/AddBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customer_service_pb.AddBalanceRequest>;
    requestDeserialize: grpc.deserialize<customer_service_pb.AddBalanceRequest>;
    responseSerialize: grpc.serialize<customer_service_pb.AddBalanceResponse>;
    responseDeserialize: grpc.deserialize<customer_service_pb.AddBalanceResponse>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    createOperator: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    createWithPhone: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    createWithEmail: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    get: grpc.handleUnaryCall<user_pb.GetRequest, customer_service_pb.CustomerResponse>;
    find: grpc.handleUnaryCall<user_pb.FindRequest, customer_service_pb.CustomersResponse>;
    findOperator: grpc.handleUnaryCall<user_pb.FindRequest, customer_service_pb.CustomersResponse>;
    update: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    updateOperator: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    updatePassword: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    updatePhone: grpc.handleUnaryCall<user_pb.Customer, customer_service_pb.CustomerResponse>;
    delete: grpc.handleUnaryCall<user_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
    getByPhone: grpc.handleUnaryCall<user_pb.GetByPhoneRequest, customer_service_pb.CustomerResponse>;
    getByEmail: grpc.handleUnaryCall<user_pb.GetByEmailRequest, customer_service_pb.CustomerResponse>;
    getInactiveCustomers: grpc.handleUnaryCall<customer_service_pb.GetInactiveCustomersRequest, customer_service_pb.CustomersResponse>;
    updateLoginAt: grpc.handleUnaryCall<user_pb.GetRequest, google_protobuf_empty_pb.Empty>;
    getByCredentials: grpc.handleUnaryCall<user_pb.GetByCredentialsRequest, customer_service_pb.CustomerResponse>;
    getOperatorByCredentials: grpc.handleUnaryCall<user_pb.GetByCredentialsRequest, customer_service_pb.CustomerResponse>;
    addBalance: grpc.handleUnaryCall<customer_service_pb.AddBalanceRequest, customer_service_pb.AddBalanceResponse>;
}

export interface ICustomerServiceClient {
    create(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createOperator(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createOperator(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createOperator(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithPhone(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithPhone(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithPhone(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithEmail(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithEmail(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    createWithEmail(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    findOperator(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    findOperator(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    findOperator(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updateOperator(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updateOperator(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updateOperator(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePhone(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePhone(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    updatePhone(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getByPhone(request: user_pb.GetByPhoneRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByPhone(request: user_pb.GetByPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByPhone(request: user_pb.GetByPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: user_pb.GetByEmailRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: user_pb.GetByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByEmail(request: user_pb.GetByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    updateLoginAt(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateLoginAt(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateLoginAt(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    addBalance(request: customer_service_pb.AddBalanceRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
    addBalance(request: customer_service_pb.AddBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
    addBalance(request: customer_service_pb.AddBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createOperator(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createOperator(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createOperator(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithPhone(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithPhone(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithPhone(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithEmail(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithEmail(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public createWithEmail(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public find(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public findOperator(request: user_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public findOperator(request: user_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public findOperator(request: user_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updateOperator(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updateOperator(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updateOperator(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePhone(request: user_pb.Customer, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePhone(request: user_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public updatePhone(request: user_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: user_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getByPhone(request: user_pb.GetByPhoneRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByPhone(request: user_pb.GetByPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByPhone(request: user_pb.GetByPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: user_pb.GetByEmailRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: user_pb.GetByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByEmail(request: user_pb.GetByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public getInactiveCustomers(request: customer_service_pb.GetInactiveCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public updateLoginAt(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateLoginAt(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateLoginAt(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public getOperatorByCredentials(request: user_pb.GetByCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.CustomerResponse) => void): grpc.ClientUnaryCall;
    public addBalance(request: customer_service_pb.AddBalanceRequest, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
    public addBalance(request: customer_service_pb.AddBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
    public addBalance(request: customer_service_pb.AddBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_service_pb.AddBalanceResponse) => void): grpc.ClientUnaryCall;
}
