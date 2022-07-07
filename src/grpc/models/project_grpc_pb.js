// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var project_pb = require('./project_pb.js');
var common_pb = require('./common_pb.js');

function serialize_questionary_service_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type questionary_service.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_CreateProjectRequest(buffer_arg) {
  return project_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_CreateQuotaRequest(arg) {
  if (!(arg instanceof project_pb.CreateQuotaRequest)) {
    throw new Error('Expected argument of type questionary_service.CreateQuotaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_CreateQuotaRequest(buffer_arg) {
  return project_pb.CreateQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_CreateResponse(arg) {
  if (!(arg instanceof common_pb.CreateResponse)) {
    throw new Error('Expected argument of type questionary_service.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_CreateResponse(buffer_arg) {
  return common_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetCategoriesRequest(arg) {
  if (!(arg instanceof project_pb.GetCategoriesRequest)) {
    throw new Error('Expected argument of type questionary_service.GetCategoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetCategoriesRequest(buffer_arg) {
  return project_pb.GetCategoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetCategoriesResponse(arg) {
  if (!(arg instanceof project_pb.GetCategoriesResponse)) {
    throw new Error('Expected argument of type questionary_service.GetCategoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetCategoriesResponse(buffer_arg) {
  return project_pb.GetCategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetProjectWithSurveyRequest(arg) {
  if (!(arg instanceof project_pb.GetProjectWithSurveyRequest)) {
    throw new Error('Expected argument of type questionary_service.GetProjectWithSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetProjectWithSurveyRequest(buffer_arg) {
  return project_pb.GetProjectWithSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetProjectWithSurveyResponse(arg) {
  if (!(arg instanceof project_pb.GetProjectWithSurveyResponse)) {
    throw new Error('Expected argument of type questionary_service.GetProjectWithSurveyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetProjectWithSurveyResponse(buffer_arg) {
  return project_pb.GetProjectWithSurveyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetProjectsByManagerRequest(arg) {
  if (!(arg instanceof project_pb.GetProjectsByManagerRequest)) {
    throw new Error('Expected argument of type questionary_service.GetProjectsByManagerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetProjectsByManagerRequest(buffer_arg) {
  return project_pb.GetProjectsByManagerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_GetProjectsByManagerResponse(arg) {
  if (!(arg instanceof project_pb.GetProjectsByManagerResponse)) {
    throw new Error('Expected argument of type questionary_service.GetProjectsByManagerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_GetProjectsByManagerResponse(buffer_arg) {
  return project_pb.GetProjectsByManagerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_Payloads(arg) {
  if (!(arg instanceof project_pb.Payloads)) {
    throw new Error('Expected argument of type questionary_service.Payloads');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_Payloads(buffer_arg) {
  return project_pb.Payloads.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_Quota(arg) {
  if (!(arg instanceof project_pb.Quota)) {
    throw new Error('Expected argument of type questionary_service.Quota');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_Quota(buffer_arg) {
  return project_pb.Quota.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_QuotaID(arg) {
  if (!(arg instanceof project_pb.QuotaID)) {
    throw new Error('Expected argument of type questionary_service.QuotaID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_QuotaID(buffer_arg) {
  return project_pb.QuotaID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_questionary_service_Str(arg) {
  if (!(arg instanceof project_pb.Str)) {
    throw new Error('Expected argument of type questionary_service.Str');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_questionary_service_Str(buffer_arg) {
  return project_pb.Str.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectServiceService = exports.ProjectServiceService = {
  create: {
    path: '/questionary_service.ProjectService/Create',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.CreateProjectRequest,
    responseType: common_pb.CreateResponse,
    requestSerialize: serialize_questionary_service_CreateProjectRequest,
    requestDeserialize: deserialize_questionary_service_CreateProjectRequest,
    responseSerialize: serialize_questionary_service_CreateResponse,
    responseDeserialize: deserialize_questionary_service_CreateResponse,
  },
  getByManager: {
    path: '/questionary_service.ProjectService/GetByManager',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetProjectsByManagerRequest,
    responseType: project_pb.GetProjectsByManagerResponse,
    requestSerialize: serialize_questionary_service_GetProjectsByManagerRequest,
    requestDeserialize: deserialize_questionary_service_GetProjectsByManagerRequest,
    responseSerialize: serialize_questionary_service_GetProjectsByManagerResponse,
    responseDeserialize: deserialize_questionary_service_GetProjectsByManagerResponse,
  },
  getProjectWithSurvey: {
    path: '/questionary_service.ProjectService/GetProjectWithSurvey',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetProjectWithSurveyRequest,
    responseType: project_pb.GetProjectWithSurveyResponse,
    requestSerialize: serialize_questionary_service_GetProjectWithSurveyRequest,
    requestDeserialize: deserialize_questionary_service_GetProjectWithSurveyRequest,
    responseSerialize: serialize_questionary_service_GetProjectWithSurveyResponse,
    responseDeserialize: deserialize_questionary_service_GetProjectWithSurveyResponse,
  },
  getAllCategories: {
    path: '/questionary_service.ProjectService/GetAllCategories',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetCategoriesRequest,
    responseType: project_pb.GetCategoriesResponse,
    requestSerialize: serialize_questionary_service_GetCategoriesRequest,
    requestDeserialize: deserialize_questionary_service_GetCategoriesRequest,
    responseSerialize: serialize_questionary_service_GetCategoriesResponse,
    responseDeserialize: deserialize_questionary_service_GetCategoriesResponse,
  },
  createQuota: {
    path: '/questionary_service.ProjectService/CreateQuota',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.CreateQuotaRequest,
    responseType: project_pb.QuotaID,
    requestSerialize: serialize_questionary_service_CreateQuotaRequest,
    requestDeserialize: deserialize_questionary_service_CreateQuotaRequest,
    responseSerialize: serialize_questionary_service_QuotaID,
    responseDeserialize: deserialize_questionary_service_QuotaID,
  },
  getBySurvey: {
    path: '/questionary_service.ProjectService/GetBySurvey',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.QuotaID,
    responseType: project_pb.Quota,
    requestSerialize: serialize_questionary_service_QuotaID,
    requestDeserialize: deserialize_questionary_service_QuotaID,
    responseSerialize: serialize_questionary_service_Quota,
    responseDeserialize: deserialize_questionary_service_Quota,
  },
  updateQuota: {
    path: '/questionary_service.ProjectService/UpdateQuota',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Quota,
    responseType: project_pb.QuotaID,
    requestSerialize: serialize_questionary_service_Quota,
    requestDeserialize: deserialize_questionary_service_Quota,
    responseSerialize: serialize_questionary_service_QuotaID,
    responseDeserialize: deserialize_questionary_service_QuotaID,
  },
  deleteQuota: {
    path: '/questionary_service.ProjectService/DeleteQuota',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.QuotaID,
    responseType: project_pb.QuotaID,
    requestSerialize: serialize_questionary_service_QuotaID,
    requestDeserialize: deserialize_questionary_service_QuotaID,
    responseSerialize: serialize_questionary_service_QuotaID,
    responseDeserialize: deserialize_questionary_service_QuotaID,
  },
  getFirsQuestion: {
    path: '/questionary_service.ProjectService/GetFirsQuestion',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Str,
    responseType: project_pb.Payloads,
    requestSerialize: serialize_questionary_service_Str,
    requestDeserialize: deserialize_questionary_service_Str,
    responseSerialize: serialize_questionary_service_Payloads,
    responseDeserialize: deserialize_questionary_service_Payloads,
  },
  updateLeftPlaces: {
    path: '/questionary_service.ProjectService/UpdateLeftPlaces',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.QuotaID,
    responseType: project_pb.QuotaID,
    requestSerialize: serialize_questionary_service_QuotaID,
    requestDeserialize: deserialize_questionary_service_QuotaID,
    responseSerialize: serialize_questionary_service_QuotaID,
    responseDeserialize: deserialize_questionary_service_QuotaID,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
