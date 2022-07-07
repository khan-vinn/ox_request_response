// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var customer_service_pb = require('./customer_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var user_pb = require('./user_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_AddBalanceRequest(arg) {
  if (!(arg instanceof customer_service_pb.AddBalanceRequest)) {
    throw new Error('Expected argument of type user_service.AddBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_AddBalanceRequest(buffer_arg) {
  return customer_service_pb.AddBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_AddBalanceResponse(arg) {
  if (!(arg instanceof customer_service_pb.AddBalanceResponse)) {
    throw new Error('Expected argument of type user_service.AddBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_AddBalanceResponse(buffer_arg) {
  return customer_service_pb.AddBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_Customer(arg) {
  if (!(arg instanceof user_pb.Customer)) {
    throw new Error('Expected argument of type user_service.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_Customer(buffer_arg) {
  return user_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_CustomerResponse(arg) {
  if (!(arg instanceof customer_service_pb.CustomerResponse)) {
    throw new Error('Expected argument of type user_service.CustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_CustomerResponse(buffer_arg) {
  return customer_service_pb.CustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_CustomersResponse(arg) {
  if (!(arg instanceof customer_service_pb.CustomersResponse)) {
    throw new Error('Expected argument of type user_service.CustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_CustomersResponse(buffer_arg) {
  return customer_service_pb.CustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_DeleteRequest(arg) {
  if (!(arg instanceof user_pb.DeleteRequest)) {
    throw new Error('Expected argument of type user_service.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_DeleteRequest(buffer_arg) {
  return user_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_FindRequest(arg) {
  if (!(arg instanceof user_pb.FindRequest)) {
    throw new Error('Expected argument of type user_service.FindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_FindRequest(buffer_arg) {
  return user_pb.FindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetByCredentialsRequest(arg) {
  if (!(arg instanceof user_pb.GetByCredentialsRequest)) {
    throw new Error('Expected argument of type user_service.GetByCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetByCredentialsRequest(buffer_arg) {
  return user_pb.GetByCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetByEmailRequest(arg) {
  if (!(arg instanceof user_pb.GetByEmailRequest)) {
    throw new Error('Expected argument of type user_service.GetByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetByEmailRequest(buffer_arg) {
  return user_pb.GetByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetByPhoneRequest(arg) {
  if (!(arg instanceof user_pb.GetByPhoneRequest)) {
    throw new Error('Expected argument of type user_service.GetByPhoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetByPhoneRequest(buffer_arg) {
  return user_pb.GetByPhoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetInactiveCustomersRequest(arg) {
  if (!(arg instanceof customer_service_pb.GetInactiveCustomersRequest)) {
    throw new Error('Expected argument of type user_service.GetInactiveCustomersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetInactiveCustomersRequest(buffer_arg) {
  return customer_service_pb.GetInactiveCustomersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetRequest(arg) {
  if (!(arg instanceof user_pb.GetRequest)) {
    throw new Error('Expected argument of type user_service.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetRequest(buffer_arg) {
  return user_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  create: {
    path: '/user_service.CustomerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  createOperator: {
    path: '/user_service.CustomerService/CreateOperator',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  createWithPhone: {
    path: '/user_service.CustomerService/CreateWithPhone',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  createWithEmail: {
    path: '/user_service.CustomerService/CreateWithEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  get: {
    path: '/user_service.CustomerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  find: {
    path: '/user_service.CustomerService/Find',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindRequest,
    responseType: customer_service_pb.CustomersResponse,
    requestSerialize: serialize_user_service_FindRequest,
    requestDeserialize: deserialize_user_service_FindRequest,
    responseSerialize: serialize_user_service_CustomersResponse,
    responseDeserialize: deserialize_user_service_CustomersResponse,
  },
  findOperator: {
    path: '/user_service.CustomerService/FindOperator',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindRequest,
    responseType: customer_service_pb.CustomersResponse,
    requestSerialize: serialize_user_service_FindRequest,
    requestDeserialize: deserialize_user_service_FindRequest,
    responseSerialize: serialize_user_service_CustomersResponse,
    responseDeserialize: deserialize_user_service_CustomersResponse,
  },
  update: {
    path: '/user_service.CustomerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  updateOperator: {
    path: '/user_service.CustomerService/UpdateOperator',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  updatePassword: {
    path: '/user_service.CustomerService/UpdatePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  updatePhone: {
    path: '/user_service.CustomerService/UpdatePhone',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Customer,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_Customer,
    requestDeserialize: deserialize_user_service_Customer,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  delete: {
    path: '/user_service.CustomerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_service_DeleteRequest,
    requestDeserialize: deserialize_user_service_DeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getByPhone: {
    path: '/user_service.CustomerService/GetByPhone',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByPhoneRequest,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_GetByPhoneRequest,
    requestDeserialize: deserialize_user_service_GetByPhoneRequest,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  getByEmail: {
    path: '/user_service.CustomerService/GetByEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByEmailRequest,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_GetByEmailRequest,
    requestDeserialize: deserialize_user_service_GetByEmailRequest,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  getInactiveCustomers: {
    path: '/user_service.CustomerService/GetInactiveCustomers',
    requestStream: false,
    responseStream: false,
    requestType: customer_service_pb.GetInactiveCustomersRequest,
    responseType: customer_service_pb.CustomersResponse,
    requestSerialize: serialize_user_service_GetInactiveCustomersRequest,
    requestDeserialize: deserialize_user_service_GetInactiveCustomersRequest,
    responseSerialize: serialize_user_service_CustomersResponse,
    responseDeserialize: deserialize_user_service_CustomersResponse,
  },
  updateLoginAt: {
    path: '/user_service.CustomerService/UpdateLoginAt',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getByCredentials: {
    path: '/user_service.CustomerService/GetByCredentials',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByCredentialsRequest,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_GetByCredentialsRequest,
    requestDeserialize: deserialize_user_service_GetByCredentialsRequest,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  getOperatorByCredentials: {
    path: '/user_service.CustomerService/GetOperatorByCredentials',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByCredentialsRequest,
    responseType: customer_service_pb.CustomerResponse,
    requestSerialize: serialize_user_service_GetByCredentialsRequest,
    requestDeserialize: deserialize_user_service_GetByCredentialsRequest,
    responseSerialize: serialize_user_service_CustomerResponse,
    responseDeserialize: deserialize_user_service_CustomerResponse,
  },
  addBalance: {
    path: '/user_service.CustomerService/AddBalance',
    requestStream: false,
    responseStream: false,
    requestType: customer_service_pb.AddBalanceRequest,
    responseType: customer_service_pb.AddBalanceResponse,
    requestSerialize: serialize_user_service_AddBalanceRequest,
    requestDeserialize: deserialize_user_service_AddBalanceRequest,
    responseSerialize: serialize_user_service_AddBalanceResponse,
    responseDeserialize: deserialize_user_service_AddBalanceResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
