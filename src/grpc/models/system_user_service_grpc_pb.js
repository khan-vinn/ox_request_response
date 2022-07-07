// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var system_user_service_pb = require('./system_user_service_pb.js');
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

function serialize_user_service_AssignProject(arg) {
  if (!(arg instanceof system_user_service_pb.AssignProject)) {
    throw new Error('Expected argument of type user_service.AssignProject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_AssignProject(buffer_arg) {
  return system_user_service_pb.AssignProject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_AssignProjectResponce(arg) {
  if (!(arg instanceof system_user_service_pb.AssignProjectResponce)) {
    throw new Error('Expected argument of type user_service.AssignProjectResponce');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_AssignProjectResponce(buffer_arg) {
  return system_user_service_pb.AssignProjectResponce.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_AssignedProjects(arg) {
  if (!(arg instanceof system_user_service_pb.AssignedProjects)) {
    throw new Error('Expected argument of type user_service.AssignedProjects');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_AssignedProjects(buffer_arg) {
  return system_user_service_pb.AssignedProjects.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_user_service_GetByEmailSystemUserRequest(arg) {
  if (!(arg instanceof system_user_service_pb.GetByEmailSystemUserRequest)) {
    throw new Error('Expected argument of type user_service.GetByEmailSystemUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetByEmailSystemUserRequest(buffer_arg) {
  return system_user_service_pb.GetByEmailSystemUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_GetByLoginSystemUserRequest(arg) {
  if (!(arg instanceof system_user_service_pb.GetByLoginSystemUserRequest)) {
    throw new Error('Expected argument of type user_service.GetByLoginSystemUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_GetByLoginSystemUserRequest(buffer_arg) {
  return system_user_service_pb.GetByLoginSystemUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_user_service_PasswordResetSystemUserRequest(arg) {
  if (!(arg instanceof user_pb.PasswordResetSystemUserRequest)) {
    throw new Error('Expected argument of type user_service.PasswordResetSystemUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_PasswordResetSystemUserRequest(buffer_arg) {
  return user_pb.PasswordResetSystemUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SystemUser(arg) {
  if (!(arg instanceof user_pb.SystemUser)) {
    throw new Error('Expected argument of type user_service.SystemUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SystemUser(buffer_arg) {
  return user_pb.SystemUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SystemUserResponse(arg) {
  if (!(arg instanceof system_user_service_pb.SystemUserResponse)) {
    throw new Error('Expected argument of type user_service.SystemUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SystemUserResponse(buffer_arg) {
  return system_user_service_pb.SystemUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SystemUserSlimResponse(arg) {
  if (!(arg instanceof system_user_service_pb.SystemUserSlimResponse)) {
    throw new Error('Expected argument of type user_service.SystemUserSlimResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SystemUserSlimResponse(buffer_arg) {
  return system_user_service_pb.SystemUserSlimResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_service_SystemUsersResponse(arg) {
  if (!(arg instanceof system_user_service_pb.SystemUsersResponse)) {
    throw new Error('Expected argument of type user_service.SystemUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_service_SystemUsersResponse(buffer_arg) {
  return system_user_service_pb.SystemUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SystemUserServiceService = exports.SystemUserServiceService = {
  create: {
    path: '/user_service.SystemUserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SystemUser,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_SystemUser,
    requestDeserialize: deserialize_user_service_SystemUser,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  get: {
    path: '/user_service.SystemUserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  find: {
    path: '/user_service.SystemUserService/Find',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindRequest,
    responseType: system_user_service_pb.SystemUsersResponse,
    requestSerialize: serialize_user_service_FindRequest,
    requestDeserialize: deserialize_user_service_FindRequest,
    responseSerialize: serialize_user_service_SystemUsersResponse,
    responseDeserialize: deserialize_user_service_SystemUsersResponse,
  },
  update: {
    path: '/user_service.SystemUserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SystemUser,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_SystemUser,
    requestDeserialize: deserialize_user_service_SystemUser,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  resetPassword: {
    path: '/user_service.SystemUserService/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.PasswordResetSystemUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_service_PasswordResetSystemUserRequest,
    requestDeserialize: deserialize_user_service_PasswordResetSystemUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  delete: {
    path: '/user_service.SystemUserService/Delete',
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
    path: '/user_service.SystemUserService/GetByCredentials',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetByCredentialsRequest,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_GetByCredentialsRequest,
    requestDeserialize: deserialize_user_service_GetByCredentialsRequest,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  getSlim: {
    path: '/user_service.SystemUserService/GetSlim',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: system_user_service_pb.SystemUserSlimResponse,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_user_service_SystemUserSlimResponse,
    responseDeserialize: deserialize_user_service_SystemUserSlimResponse,
  },
  getByLogin: {
    path: '/user_service.SystemUserService/GetByLogin',
    requestStream: false,
    responseStream: false,
    requestType: system_user_service_pb.GetByLoginSystemUserRequest,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_GetByLoginSystemUserRequest,
    requestDeserialize: deserialize_user_service_GetByLoginSystemUserRequest,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  getByEmail: {
    path: '/user_service.SystemUserService/GetByEmail',
    requestStream: false,
    responseStream: false,
    requestType: system_user_service_pb.GetByEmailSystemUserRequest,
    responseType: system_user_service_pb.SystemUserResponse,
    requestSerialize: serialize_user_service_GetByEmailSystemUserRequest,
    requestDeserialize: deserialize_user_service_GetByEmailSystemUserRequest,
    responseSerialize: serialize_user_service_SystemUserResponse,
    responseDeserialize: deserialize_user_service_SystemUserResponse,
  },
  assignProjectToManager: {
    path: '/user_service.SystemUserService/AssignProjectToManager',
    requestStream: false,
    responseStream: false,
    requestType: system_user_service_pb.AssignProject,
    responseType: system_user_service_pb.AssignProjectResponce,
    requestSerialize: serialize_user_service_AssignProject,
    requestDeserialize: deserialize_user_service_AssignProject,
    responseSerialize: serialize_user_service_AssignProjectResponce,
    responseDeserialize: deserialize_user_service_AssignProjectResponce,
  },
  getManagerProjects: {
    path: '/user_service.SystemUserService/GetManagerProjects',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: system_user_service_pb.AssignedProjects,
    requestSerialize: serialize_user_service_GetRequest,
    requestDeserialize: deserialize_user_service_GetRequest,
    responseSerialize: serialize_user_service_AssignedProjects,
    responseDeserialize: deserialize_user_service_AssignedProjects,
  },
};

exports.SystemUserServiceClient = grpc.makeGenericClientConstructor(SystemUserServiceService);
