// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var super_user_service_pb = require('./super_user_service_pb.js');
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

function serialize_user_service_GetRequest(arg) {
  if (!(arg instanceof user_pb.GetRequest)) {
    throw new Error('Expected argument of type user_service.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetRequest(buffer_arg) {
  return user_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SuperUser(arg) {
  if (!(arg instanceof user_pb.SuperUser)) {
    throw new Error('Expected argument of type user_service.SuperUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SuperUser(buffer_arg) {
  return user_pb.SuperUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SuperUserResponse(arg) {
  if (!(arg instanceof super_user_service_pb.SuperUserResponse)) {
    throw new Error('Expected argument of type user_service.SuperUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SuperUserResponse(buffer_arg) {
  return super_user_service_pb.SuperUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SuperUsersResponse(arg) {
  if (!(arg instanceof super_user_service_pb.SuperUsersResponse)) {
    throw new Error('Expected argument of type user_service.SuperUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SuperUsersResponse(buffer_arg) {
  return super_user_service_pb.SuperUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SuperUserServiceService = exports.SuperUserServiceService = {
  create: {
    path: '/user_service.SuperUserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SuperUser,
    responseType: super_user_service_pb.SuperUserResponse,
    requestSerialize: serialize_user_service_SuperUser,
    requestDeserialize: deserialize_user_service_SuperUser,
    responseSerialize: serialize_user_service_SuperUserResponse,
    responseDeserialize: deserialize_user_service_SuperUserResponse,
  },
  get: {
    path: '/user_service.SuperUserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: super_user_service_pb.SuperUserResponse,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_user_service_SuperUserResponse,
    responseDeserialize: deserialize_user_service_SuperUserResponse,
  },
  find: {
    path: '/user_service.SuperUserService/Find',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindRequest,
    responseType: super_user_service_pb.SuperUsersResponse,
    requestSerialize: serialize_user_service_FindRequest,
    requestDeserialize: deserialize_user_service_FindRequest,
    responseSerialize: serialize_user_service_SuperUsersResponse,
    responseDeserialize: deserialize_user_service_SuperUsersResponse,
  },
  update: {
    path: '/user_service.SuperUserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SuperUser,
    responseType: super_user_service_pb.SuperUserResponse,
    requestSerialize: serialize_user_service_SuperUser,
    requestDeserialize: deserialize_user_service_SuperUser,
    responseSerialize: serialize_user_service_SuperUserResponse,
    responseDeserialize: deserialize_user_service_SuperUserResponse,
  },
  delete: {
    path: '/user_service.SuperUserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_service_DeleteRequest,
    requestDeserialize: deserialize_user_service_DeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getByCredentials: {
    path: '/user_service.SuperUserService/GetByCredentials',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByCredentialsRequest,
    responseType: super_user_service_pb.SuperUserResponse,
    requestSerialize: serialize_user_service_GetByCredentialsRequest,
    requestDeserialize: deserialize_user_service_GetByCredentialsRequest,
    responseSerialize: serialize_user_service_SuperUserResponse,
    responseDeserialize: deserialize_user_service_SuperUserResponse,
  },
};

exports.SuperUserServiceClient = grpc.makeGenericClientConstructor(SuperUserServiceService);
