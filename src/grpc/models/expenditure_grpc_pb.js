// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var expenditure_pb = require('./expenditure_pb.js');

function serialize_question_response_service_AddExpenditureRequest(arg) {
  if (!(arg instanceof expenditure_pb.AddExpenditureRequest)) {
    throw new Error('Expected argument of type question_response_service.AddExpenditureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_AddExpenditureRequest(buffer_arg) {
  return expenditure_pb.AddExpenditureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_AddExpenditureResponse(arg) {
  if (!(arg instanceof expenditure_pb.AddExpenditureResponse)) {
    throw new Error('Expected argument of type question_response_service.AddExpenditureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_AddExpenditureResponse(buffer_arg) {
  return expenditure_pb.AddExpenditureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_GetExpenditureRequest(arg) {
  if (!(arg instanceof expenditure_pb.GetExpenditureRequest)) {
    throw new Error('Expected argument of type question_response_service.GetExpenditureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_GetExpenditureRequest(buffer_arg) {
  return expenditure_pb.GetExpenditureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_GetExpenditureResponse(arg) {
  if (!(arg instanceof expenditure_pb.GetExpenditureResponse)) {
    throw new Error('Expected argument of type question_response_service.GetExpenditureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_GetExpenditureResponse(buffer_arg) {
  return expenditure_pb.GetExpenditureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_ListByUsersReq(arg) {
  if (!(arg instanceof expenditure_pb.ListByUsersReq)) {
    throw new Error('Expected argument of type question_response_service.ListByUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_ListByUsersReq(buffer_arg) {
  return expenditure_pb.ListByUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_Str(arg) {
  if (!(arg instanceof expenditure_pb.Str)) {
    throw new Error('Expected argument of type question_response_service.Str');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_Str(buffer_arg) {
  return expenditure_pb.Str.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExpenditureService = exports.ExpenditureService = {
  addExpenditure: {
    path: '/question_response_service.Expenditure/AddExpenditure',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.AddExpenditureRequest,
    responseType: expenditure_pb.AddExpenditureResponse,
    requestSerialize: serialize_question_response_service_AddExpenditureRequest,
    requestDeserialize: deserialize_question_response_service_AddExpenditureRequest,
    responseSerialize: serialize_question_response_service_AddExpenditureResponse,
    responseDeserialize: deserialize_question_response_service_AddExpenditureResponse,
  },
  getExpenditure: {
    path: '/question_response_service.Expenditure/GetExpenditure',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.GetExpenditureRequest,
    responseType: expenditure_pb.GetExpenditureResponse,
    requestSerialize: serialize_question_response_service_GetExpenditureRequest,
    requestDeserialize: deserialize_question_response_service_GetExpenditureRequest,
    responseSerialize: serialize_question_response_service_GetExpenditureResponse,
    responseDeserialize: deserialize_question_response_service_GetExpenditureResponse,
  },
  getQuestionFirst: {
    path: '/question_response_service.Expenditure/GetQuestionFirst',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.Str,
    responseType: expenditure_pb.Str,
    requestSerialize: serialize_question_response_service_Str,
    requestDeserialize: deserialize_question_response_service_Str,
    responseSerialize: serialize_question_response_service_Str,
    responseDeserialize: deserialize_question_response_service_Str,
  },
  listByUsers: {
    path: '/question_response_service.Expenditure/ListByUsers',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.ListByUsersReq,
    responseType: expenditure_pb.Str,
    requestSerialize: serialize_question_response_service_ListByUsersReq,
    requestDeserialize: deserialize_question_response_service_ListByUsersReq,
    responseSerialize: serialize_question_response_service_Str,
    responseDeserialize: deserialize_question_response_service_Str,
  },
  printHello: {
    path: '/question_response_service.Expenditure/PrintHello',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.Str,
    responseType: expenditure_pb.Str,
    requestSerialize: serialize_question_response_service_Str,
    requestDeserialize: deserialize_question_response_service_Str,
    responseSerialize: serialize_question_response_service_Str,
    responseDeserialize: deserialize_question_response_service_Str,
  },
  getPortrait: {
    path: '/question_response_service.Expenditure/GetPortrait',
    requestStream: false,
    responseStream: false,
    requestType: expenditure_pb.Str,
    responseType: expenditure_pb.Str,
    requestSerialize: serialize_question_response_service_Str,
    requestDeserialize: deserialize_question_response_service_Str,
    responseSerialize: serialize_question_response_service_Str,
    responseDeserialize: deserialize_question_response_service_Str,
  },
};

exports.ExpenditureClient = grpc.makeGenericClientConstructor(ExpenditureService);
