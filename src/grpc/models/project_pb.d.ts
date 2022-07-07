// package: questionary_service
// file: project.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Data extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class Payloads extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): Payloads;
    getData(): string;
    setData(value: string): Payloads;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payloads.AsObject;
    static toObject(includeInstance: boolean, msg: Payloads): Payloads.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payloads, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payloads;
    static deserializeBinaryFromReader(message: Payloads, reader: jspb.BinaryReader): Payloads;
}

export namespace Payloads {
    export type AsObject = {
        topic: string,
        data: string,
    }
}

export class Str extends jspb.Message { 
    getData(): string;
    setData(value: string): Str;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Str.AsObject;
    static toObject(includeInstance: boolean, msg: Str): Str.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Str, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Str;
    static deserializeBinaryFromReader(message: Str, reader: jspb.BinaryReader): Str;
}

export namespace Str {
    export type AsObject = {
        data: string,
    }
}

export class CreateProjectRequest extends jspb.Message { 
    getAutoNext(): boolean;
    setAutoNext(value: boolean): CreateProjectRequest;
    getAvailableFrom(): string;
    setAvailableFrom(value: string): CreateProjectRequest;
    getAvailableUntil(): string;
    setAvailableUntil(value: string): CreateProjectRequest;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): common_pb.CreatePicture | undefined;
    setImage(value?: common_pb.CreatePicture): CreateProjectRequest;
    getIsActive(): boolean;
    setIsActive(value: boolean): CreateProjectRequest;
    clearLanguagesList(): void;
    getLanguagesList(): Array<common_pb.ProjectLanguage>;
    setLanguagesList(value: Array<common_pb.ProjectLanguage>): CreateProjectRequest;
    addLanguages(value?: common_pb.ProjectLanguage, index?: number): common_pb.ProjectLanguage;
    getMultipleAnswers(): boolean;
    setMultipleAnswers(value: boolean): CreateProjectRequest;
    getRecordAnswers(): boolean;
    setRecordAnswers(value: boolean): CreateProjectRequest;
    getReturnAnswers(): boolean;
    setReturnAnswers(value: boolean): CreateProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
    static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
    export type AsObject = {
        autoNext: boolean,
        availableFrom: string,
        availableUntil: string,
        image?: common_pb.CreatePicture.AsObject,
        isActive: boolean,
        languagesList: Array<common_pb.ProjectLanguage.AsObject>,
        multipleAnswers: boolean,
        recordAnswers: boolean,
        returnAnswers: boolean,
    }
}

export class GetProjectsByManagerRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetProjectsByManagerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectsByManagerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectsByManagerRequest): GetProjectsByManagerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectsByManagerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectsByManagerRequest;
    static deserializeBinaryFromReader(message: GetProjectsByManagerRequest, reader: jspb.BinaryReader): GetProjectsByManagerRequest;
}

export namespace GetProjectsByManagerRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetProjectsByManagerResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetProjectsByManagerResponse;
    getTitle(): string;
    setTitle(value: string): GetProjectsByManagerResponse;
    getImage(): string;
    setImage(value: string): GetProjectsByManagerResponse;
    getStatus(): boolean;
    setStatus(value: boolean): GetProjectsByManagerResponse;
    getFinishedResponseCount(): number;
    setFinishedResponseCount(value: number): GetProjectsByManagerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectsByManagerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectsByManagerResponse): GetProjectsByManagerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectsByManagerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectsByManagerResponse;
    static deserializeBinaryFromReader(message: GetProjectsByManagerResponse, reader: jspb.BinaryReader): GetProjectsByManagerResponse;
}

export namespace GetProjectsByManagerResponse {
    export type AsObject = {
        id: string,
        title: string,
        image: string,
        status: boolean,
        finishedResponseCount: number,
    }
}

export class CreateQuotaRequest extends jspb.Message { 
    getPlaces(): number;
    setPlaces(value: number): CreateQuotaRequest;
    getStatus(): string;
    setStatus(value: string): CreateQuotaRequest;
    getSurveyId(): string;
    setSurveyId(value: string): CreateQuotaRequest;
    clearQuestionsList(): void;
    getQuestionsList(): Array<CreateQuotaQuestions>;
    setQuestionsList(value: Array<CreateQuotaQuestions>): CreateQuotaRequest;
    addQuestions(value?: CreateQuotaQuestions, index?: number): CreateQuotaQuestions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateQuotaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateQuotaRequest): CreateQuotaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateQuotaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateQuotaRequest;
    static deserializeBinaryFromReader(message: CreateQuotaRequest, reader: jspb.BinaryReader): CreateQuotaRequest;
}

export namespace CreateQuotaRequest {
    export type AsObject = {
        places: number,
        status: string,
        surveyId: string,
        questionsList: Array<CreateQuotaQuestions.AsObject>,
    }
}

export class QuotaID extends jspb.Message { 
    getId(): string;
    setId(value: string): QuotaID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotaID.AsObject;
    static toObject(includeInstance: boolean, msg: QuotaID): QuotaID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuotaID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotaID;
    static deserializeBinaryFromReader(message: QuotaID, reader: jspb.BinaryReader): QuotaID;
}

export namespace QuotaID {
    export type AsObject = {
        id: string,
    }
}

export class CreateQuotaQuestions extends jspb.Message { 
    getQuestionId(): string;
    setQuestionId(value: string): CreateQuotaQuestions;
    getKey(): string;
    setKey(value: string): CreateQuotaQuestions;
    getValue(): string;
    setValue(value: string): CreateQuotaQuestions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateQuotaQuestions.AsObject;
    static toObject(includeInstance: boolean, msg: CreateQuotaQuestions): CreateQuotaQuestions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateQuotaQuestions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateQuotaQuestions;
    static deserializeBinaryFromReader(message: CreateQuotaQuestions, reader: jspb.BinaryReader): CreateQuotaQuestions;
}

export namespace CreateQuotaQuestions {
    export type AsObject = {
        questionId: string,
        key: string,
        value: string,
    }
}

export class QuotaQuestion extends jspb.Message { 
    getId(): string;
    setId(value: string): QuotaQuestion;
    getQuestionId(): string;
    setQuestionId(value: string): QuotaQuestion;
    getKey(): string;
    setKey(value: string): QuotaQuestion;
    getValue(): string;
    setValue(value: string): QuotaQuestion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotaQuestion.AsObject;
    static toObject(includeInstance: boolean, msg: QuotaQuestion): QuotaQuestion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuotaQuestion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotaQuestion;
    static deserializeBinaryFromReader(message: QuotaQuestion, reader: jspb.BinaryReader): QuotaQuestion;
}

export namespace QuotaQuestion {
    export type AsObject = {
        id: string,
        questionId: string,
        key: string,
        value: string,
    }
}

export class Quota extends jspb.Message { 
    getId(): string;
    setId(value: string): Quota;
    getPlaces(): number;
    setPlaces(value: number): Quota;
    getStatus(): string;
    setStatus(value: string): Quota;
    getSurveyId(): string;
    setSurveyId(value: string): Quota;
    clearQuestionsList(): void;
    getQuestionsList(): Array<QuotaQuestion>;
    setQuestionsList(value: Array<QuotaQuestion>): Quota;
    addQuestions(value?: QuotaQuestion, index?: number): QuotaQuestion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quota.AsObject;
    static toObject(includeInstance: boolean, msg: Quota): Quota.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quota, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quota;
    static deserializeBinaryFromReader(message: Quota, reader: jspb.BinaryReader): Quota;
}

export namespace Quota {
    export type AsObject = {
        id: string,
        places: number,
        status: string,
        surveyId: string,
        questionsList: Array<QuotaQuestion.AsObject>,
    }
}

export class GetProjectWithSurveyRequest extends jspb.Message { 
    getSurveyId(): string;
    setSurveyId(value: string): GetProjectWithSurveyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectWithSurveyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectWithSurveyRequest): GetProjectWithSurveyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectWithSurveyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectWithSurveyRequest;
    static deserializeBinaryFromReader(message: GetProjectWithSurveyRequest, reader: jspb.BinaryReader): GetProjectWithSurveyRequest;
}

export namespace GetProjectWithSurveyRequest {
    export type AsObject = {
        surveyId: string,
    }
}

export class GetProjectWithSurveyResponse extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): Project | undefined;
    setProject(value?: Project): GetProjectWithSurveyResponse;

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): Survey | undefined;
    setSurvey(value?: Survey): GetProjectWithSurveyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectWithSurveyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectWithSurveyResponse): GetProjectWithSurveyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectWithSurveyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectWithSurveyResponse;
    static deserializeBinaryFromReader(message: GetProjectWithSurveyResponse, reader: jspb.BinaryReader): GetProjectWithSurveyResponse;
}

export namespace GetProjectWithSurveyResponse {
    export type AsObject = {
        project?: Project.AsObject,
        survey?: Survey.AsObject,
    }
}

export class Project extends jspb.Message { 
    getId(): string;
    setId(value: string): Project;
    getUserId(): string;
    setUserId(value: string): Project;
    getScore(): number;
    setScore(value: number): Project;
    getIsActive(): boolean;
    setIsActive(value: boolean): Project;
    getMultipleAnswers(): boolean;
    setMultipleAnswers(value: boolean): Project;
    getAvailableFrom(): number;
    setAvailableFrom(value: number): Project;
    getAvailableUntil(): number;
    setAvailableUntil(value: number): Project;
    getCategory(): string;
    setCategory(value: string): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        id: string,
        userId: string,
        score: number,
        isActive: boolean,
        multipleAnswers: boolean,
        availableFrom: number,
        availableUntil: number,
        category: string,
    }
}

export class Survey extends jspb.Message { 
    getId(): string;
    setId(value: string): Survey;
    getUserId(): string;
    setUserId(value: string): Survey;
    getProjectId(): string;
    setProjectId(value: string): Survey;
    getTitle(): string;
    setTitle(value: string): Survey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Survey.AsObject;
    static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Survey;
    static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
}

export namespace Survey {
    export type AsObject = {
        id: string,
        userId: string,
        projectId: string,
        title: string,
    }
}

export class GetCategoriesRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetCategoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesRequest): GetCategoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesRequest;
    static deserializeBinaryFromReader(message: GetCategoriesRequest, reader: jspb.BinaryReader): GetCategoriesRequest;
}

export namespace GetCategoriesRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetCategoriesResponse extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<Category>;
    setCategoriesList(value: Array<Category>): GetCategoriesResponse;
    addCategories(value?: Category, index?: number): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesResponse): GetCategoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesResponse;
    static deserializeBinaryFromReader(message: GetCategoriesResponse, reader: jspb.BinaryReader): GetCategoriesResponse;
}

export namespace GetCategoriesResponse {
    export type AsObject = {
        categoriesList: Array<Category.AsObject>,
    }
}

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): Category;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): Title | undefined;
    setTitle(value?: Title): Category;
    getIsActive(): boolean;
    setIsActive(value: boolean): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: string,
        title?: Title.AsObject,
        isActive: boolean,
    }
}

export class Title extends jspb.Message { 
    getUz(): string;
    setUz(value: string): Title;
    getRu(): string;
    setRu(value: string): Title;
    getKg(): string;
    setKg(value: string): Title;
    getKz(): string;
    setKz(value: string): Title;
    getTj(): string;
    setTj(value: string): Title;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Title.AsObject;
    static toObject(includeInstance: boolean, msg: Title): Title.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Title, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Title;
    static deserializeBinaryFromReader(message: Title, reader: jspb.BinaryReader): Title;
}

export namespace Title {
    export type AsObject = {
        uz: string,
        ru: string,
        kg: string,
        kz: string,
        tj: string,
    }
}
