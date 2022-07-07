// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var questionary_service_pb = require('./questionary_service_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_question_response_service_GetSurveysRequest(arg) {
  if (!(arg instanceof questionary_service_pb.GetSurveysRequest)) {
    throw new Error('Expected argument of type question_response_service.GetSurveysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_GetSurveysRequest(buffer_arg) {
  return questionary_service_pb.GetSurveysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_response_service_GetSurveysResponse(arg) {
  if (!(arg instanceof questionary_service_pb.GetSurveysResponse)) {
    throw new Error('Expected argument of type question_response_service.GetSurveysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_response_service_GetSurveysResponse(buffer_arg) {
  return questionary_service_pb.GetSurveysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SurveysService = exports.SurveysService = {
  getSurveys: {
    path: '/question_response_service.Surveys/GetSurveys',
    requestStream: false,
    responseStream: false,
    requestType: questionary_service_pb.GetSurveysRequest,
    responseType: questionary_service_pb.GetSurveysResponse,
    requestSerialize: serialize_question_response_service_GetSurveysRequest,
    requestDeserialize: deserialize_question_response_service_GetSurveysRequest,
    responseSerialize: serialize_question_response_service_GetSurveysResponse,
    responseDeserialize: deserialize_question_response_service_GetSurveysResponse,
  },
};

exports.SurveysClient = grpc.makeGenericClientConstructor(SurveysService);
