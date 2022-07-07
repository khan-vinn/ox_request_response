/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ApiResponse } from "../lib/ApiResponse";
import logger from "../config/logger";
import ResponseModel, { IResponce } from "../models/Response";
import fetch from "node-fetch";
import config from "../config";
import { format } from "url";

function emptyArray(arr: any, res: any) {
    if (arr === undefined || null || arr.length === 0) {
        logger.error(`${arr}_NOT_FOUND`, arr);
        const e = new Error("errorrrrrrr");
        console.log(e);
        return new ApiResponse(res).error(404, "RESPONSES_NOT_FOUND");
    }
}

export default class {
    async convert(req: Request, res: Response): Promise<any> {
        try {
            const survey_id = req.params.survey_id;
            const manager_id = req.params.manager_id;
            const allResponses = await ResponseModel.find({
                survey_id,
                manager_id
            });
            console.log("allresponses==>",allResponses);
            
            emptyArray(allResponses, res);

            // Get Date
            let dateObj = new Date();
            let month = dateObj.getMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            // Get time
            let creationHour = new Date().getHours();
            let creationMinute = new Date().getMinutes();
            let creationSec = new Date().getSeconds();

            let header = {
                creationDate: `${day}/${month}/${year}`,
                creationTime: `${creationHour}:${creationMinute}:${creationSec}`
            };
            const variables: any = {};
            variables.header = header;
            variables.variable = [];
            let surveys: any;
            fetch(`https://api-manager.oxbox.uz/v1/survey/${survey_id}/all`)
                .then((res) => res.json())
                .then((json) => {
                    surveys = json;
                    // id
                    let variableId: any = {},
                        variableUserID: any = {},
                        variableUserName: any = {},
                        variableUserLogin: any = {},
                        variableDevice: any = {},
                        variableCreatedAt: any = {},
                        variableFinishedAt: any = {};

                    variableId.label = "Response id";
                    variableId.name = `ID`;
                    variableId.type = "text";
                    variableId.values = [];
                    variableId.data = [];

                    variableUserID.label = "User id";
                    variableUserID.name = "UserId";
                    variableUserID.type = "text";
                    variableUserID.values = [];
                    variableUserID.data = [];

                    variableUserName.label = `User name`;
                    variableUserName.name = `UserName`;
                    variableUserName.type = "text";
                    variableUserName.values = [];
                    variableUserName.data = [];

                    variableUserLogin.label = "User login";
                    variableUserLogin.name = "UserLogin";
                    variableUserLogin.type = "text";
                    variableUserLogin.values = [];
                    variableUserLogin.data = [];

                    variableDevice.label = `Device`;
                    variableDevice.name = `Device`;
                    variableDevice.type = "text";
                    variableDevice.values = [];
                    variableDevice.data = [];

                    variableCreatedAt.label = "Created time";
                    variableCreatedAt.name = `CreatedAt`;
                    variableCreatedAt.type = "text";
                    variableCreatedAt.values = [];
                    variableCreatedAt.data = [];

                    variableFinishedAt.label = "Finished time";
                    variableFinishedAt.name = `FinishedAt`;
                    variableFinishedAt.type = "text";
                    variableFinishedAt.values = [];
                    variableFinishedAt.data = [];

                    allResponses.forEach((element) => {
                        if (element?.status === "finished" && element?.user_id !== element?.manager_id) {
                            variableId.data.push(element?._id || null);
                            variableUserID.data.push(element?.operator_id || null);
                            variableUserName.data.push(element?.username || null);
                            variableUserLogin.data.push(element?.login || null);
                            variableDevice.data.push(element?.device || null);
                            variableCreatedAt.data.push(
                                new Date(element?.started_at).toISOString().replace(/T/, " ").replace(/\..+/, "") ||
                                    null
                            );
                            variableFinishedAt.data.push(
                                new Date(element?.finished_at).toISOString().replace(/T/, " ").replace(/\..+/, "") ||
                                    null
                            );
                        }
                    });

                    variables.variable.push(variableId);
                    variables.variable.push(variableUserID);
                    variables.variable.push(variableUserName);
                    variables.variable.push(variableUserLogin);
                    variables.variable.push(variableDevice);
                    variables.variable.push(variableCreatedAt);
                    variables.variable.push(variableFinishedAt);

                    emptyArray(surveys.questions, res);
                    surveys.questions.forEach((element1: any, index1: any) => {
                        if (
                            element1.type === "text" ||
                            element1.type === "number" ||
                            element1.type === "date" ||
                            element1.type === "scale" 
                            //|| element1.type === "info"
                        ) {
                            let variable: any = {};
                            variable.label = element1.data.label.ru;
                            variable.type = element1.type;
                            variable.name = `Q${index1 + 1}`;
                            variable.values = [];

                            let data: any = [];
                            allResponses.forEach((element) => {
                                if (element?.status === "finished" && element?.user_id !== element?.manager_id) {
                                    let i = element.questions.find((q) => q.id === element1.id);
                                    if (element1.type === "text") data.push(i?.answer.text ? i?.answer.text : null);
                                    if (element1.type === "number") data.push(i?.answer.text ? i?.answer.text : null);
                                    if (element1.type === "date") data.push(i?.answer.date ? i?.answer.date : null);
                                    if (element1.type === "scale") data.push(i?.answer.text ? i?.answer.text : null);
                                    //if (element1.type === "info") data.push(null);
                                }
                            });
                            variable.data = data;
                            variables.variable.push(variable);
                        } else if (element1.type === "radio") {
                            let variable: any = {},
                                default_data: any = [],
                                default_label: string = "",
                                default_id: string = "",
                                is_default = false;
                            variable.label =
                                element1.data.label.ru ||
                                element1.data.label.uz ||
                                element1.data.label.kz ||
                                element1.data.label.kg ||
                                element1.data.label.tj ||
                                "";
                            variable.type = element1.type;
                            variable.values = [];
                            element1.data.answers.forEach((element: any, i: any) => {
                                if (
                                    element.label.ru == "Другое" ||
                                    element.label.uz == "Boshqa" ||
                                    element.label.kg == "Башка" ||
                                    element.label.kz == "Басқа" ||
                                    element.label.tj == "Дигар"
                                ) {
                                    is_default = true;
                                    default_label = element.open_value_type;
                                    default_id = element.id;
                                }
                                variable.values.push({
                                    code: element.code,
                                    value:
                                        element.label.ru ||
                                        element.label.uz ||
                                        element.label.kz ||
                                        element.label.kg ||
                                        element.label.tj ||
                                        ""
                                });
                            });
                            variable.name = `Q${index1 + 1}`;
                            let data: any = [];
                            allResponses.forEach((element) => {
                                if (element?.status === "finished" && element?.user_id !== element?.manager_id) {
                                    let i = element.questions.find((q) => q.id === element1.id);
                                    if (i?.answer?.answer) {
                                        let j = element1?.data?.answers?.find((a: any) => a.id === i?.answer.answer);
                                        data.push(j?.code ? j?.code : null);
                                        //default answer column
                                        if (i?.answer.answer == default_id) default_data.push(i?.answer?.text || null);
                                        else default_data.push(null);
                                    } else {
                                        data.push(null);
                                        default_data.push(null);
                                    }
                                }
                            });
                            variable.data = data;
                            variables.variable.push(variable);
                            if (is_default) {
                                if (default_label == "string") variable.name += "_TEXT";
                                else variable.name += "_NUMBER";
                                variable.values = [];
                                variable.data = default_data;
                                variables.variable.push(variable);
                            }
                        } else if (element1.type === "checkbox") {
                            let label =
                                element1.data.label.ru ||
                                element1.data.label.uz ||
                                element1.data.label.kz ||
                                element1.data.label.kg ||
                                element1.data.label.tj ||
                                "";
                            emptyArray(element1.data.answers, res);

                            let default_data: any = [],
                                default_name: string = "",
                                default_name_num: number = 0,
                                default_label: string = "",
                                default_id: string = "",
                                is_default = false;
                            element1.data.answers.forEach((e: any, index2: any) => {
                                let variable: any = {};
                                if (
                                    e.label.ru == "Другое" ||
                                    e.label.uz == "Boshqa" ||
                                    e.label.kg == "Башка" ||
                                    e.label.kz == "Басқа" ||
                                    e.label.tj == "Дигар"
                                ) {
                                    is_default = true;
                                    default_name = e.open_value_type;
                                    default_label =
                                        label + " " + e.label.ru ||
                                        e.label.uz ||
                                        e.label.kz ||
                                        e.label.kg ||
                                        e.label.tj ||
                                        "";
                                    default_id = e.id;
                                    default_name_num = e?.code;
                                }
                                variable.values = [];
                                variable.name = `Q${index1 + 1}.${e?.code}`;
                                variable.type = element1.type;
                                variable.label =
                                    label + " " + e.label.ru ||
                                    e.label.uz ||
                                    e.label.kz ||
                                    e.label.kg ||
                                    e.label.tj ||
                                    "";
                                variable.values[0] = {
                                    code: 1,
                                    value: "Выбран"
                                };
                                variable.values[1] = {
                                    code: 0,
                                    value: "Не выбран"
                                };
                                let data: any = [];
                                allResponses.forEach((element) => {
                                    if (element?.status === "finished" && element?.user_id !== element?.manager_id) {
                                        let i = element.questions.find((q) => q.id === element1.id);
                                        if (!i) data.push(null);
                                        else if (i?.answer.answers.includes(i.answer.answers[index2])) data.push(1);
                                        else data.push(0);
                                        //default answer column
                                        if (is_default) {
                                            if (i?.answer.answers.includes(default_id))
                                                default_data.push(i?.answer?.text || null);
                                            else default_data.push(null);
                                        }
                                    }
                                });
                                variable.data = data;
                                variables.variable.push(variable);
                                if (is_default) {
                                    let variable: any = {};
                                    if (default_name == "string")
                                        variable.name = `Q${index1 + 1}.${default_name_num}_TEXT`;
                                    else variable.name = `Q${index1 + 1}.${default_name_num}_NUMBER`;
                                    variable.values = [];
                                    variable.label = default_label;
                                    variable.type = "checkbox";
                                    variable.data = default_data;
                                    variables.variable.push(variable);
                                }
                            });
                        } else if (element1.type === "matrix-single") {
                            let label =
                                element1?.data?.label?.ru ||
                                element1?.data?.label?.uz ||
                                element1?.data?.label?.kz ||
                                element1?.data?.label?.kg ||
                                element1?.data?.label?.tj ||
                                "";
                            emptyArray(element1?.data?.answers, res);

                            element1.data.answers.forEach((e: any, index2: any) => {
                                let variable: any = {};
                                variable.values = [];
                                variable.name = `Q${index1 + 1}.${e?.code}`;
                                variable.type = element1.type;
                                variable.label =
                                    label + " " + e.label.ru ||
                                    e.label.uz ||
                                    e.label.kz ||
                                    e.label.kg ||
                                    e.label.tj ||
                                    "";
                                element1?.data?.columns.forEach((element: any, i: any) => {
                                    variable.values.push({
                                        code: element.code,
                                        value:
                                            element.label.ru ||
                                            element.label.uz ||
                                            element.label.kz ||
                                            element.label.kg ||
                                            element.label.tj ||
                                            ""
                                    });
                                });
                                let data: any = [];
                                allResponses.forEach((element) => {
                                    if (element?.status === "finished" && element?.user_id !== element?.manager_id) {
                                        let i = element.questions.find((q) => q.id === element1.id);
                                        if (!i) data.push(null);
                                        else {
                                            let j = element1?.data?.columns.find(
                                                (a: any) => a.id === i?.answer.matrix[index2].column
                                            );
                                            data.push(j?.code ? j?.code : null);
                                        }
                                    }
                                });
                                variable.data = data;
                                variables.variable.push(variable);
                            });
                        } else if (element1.type === "matrix-multiple") {
                            emptyArray(element1?.data?.answers, res);

                            element1?.data?.answers.forEach((elA: any, indexA: any) => {
                                element1?.data?.columns.forEach((elC: any, indexC: any) => {
                                    let label =
                                        element1?.data?.label?.ru ||
                                        element1?.data?.label?.uz ||
                                        element1?.data?.label?.kz ||
                                        element1?.data?.label?.kg ||
                                        element1?.data?.label?.tj ||
                                        "";
                                    let variable: any = {};
                                    variable.values = [];
                                    variable.type = element1.type;
                                    label =
                                        label + "? - " + elA.label.ru ||
                                        elA.label.uz ||
                                        elA.label.kz ||
                                        elA.label.kg ||
                                        elA.label.tj ||
                                        "";

                                    variable.name = `Q${index1 + 1}.${elA?.code}.${elC.code}`;
                                    variable.label =
                                        label + " " + elC.label.ru ||
                                        elC.label.uz ||
                                        elC.label.kz ||
                                        elC.label.kg ||
                                        elC.label.tj ||
                                        "";
                                    variable.values[0] = {
                                        code: 1,
                                        value: "Выбран"
                                    };
                                    variable.values[1] = {
                                        code: 0,
                                        value: "Не выбран"
                                    };
                                    let data: any = [];
                                    allResponses.forEach((element) => {
                                        if (
                                            element?.status === "finished" &&
                                            element?.user_id !== element?.manager_id
                                        ) {
                                            let i = element.questions.find((q) => q.id === element1.id);
                                            if (!i) data.push(null);
                                            else {
                                                let j = i?.answer?.matrix[indexC].columns.includes(elC.id);
                                                if (
                                                    i?.answer?.matrix[indexA].columns.includes(elC.id) === true &&
                                                    i?.answer?.matrix[indexA].row_id === elA.id
                                                )
                                                    data.push(1);
                                                else data.push(0);
                                            }
                                        }
                                    });
                                    variable.data = data;
                                    variables.variable.push(variable);
                                });
                            });
                        }
                    });
                    // variables.variable.forEach((e:any) => {
                    //     console.log(e.type);
                    //     console.log(e.values);
                    //     console.log(e.data);
                    // });
                    //console.log("Spssss===>",config.spssService)
                    logger.info("spss_data sent to spss_servise", variables);
                    //console.log("spss_json==>",JSON.stringify(variables))
                    console.log("variables===>",allResponses.length == 0)
                    if (allResponses.length == 0){
                        console.log("======>")
                        return
                    }
                    fetch(`${config.spssService}/api/spss`, {
                        method: "POST",
                        body: JSON.stringify(variables)
                    })
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            if (json.message === "success") {
                                res.json({
                                    json
                                });
                            }
                        })
                        .catch((e: any) => {
                            logger.error("Error with fetch to spss converter sevice:\n", e);
                            // console.log(e);
                            return new ApiResponse(res).error(500, "SERVER_ERROR");
                        });
                })
                //
                .catch((e: any) => {
                    logger.error("Error with fetch surveys:\n", e);
                    // console.log(e);
                    return new ApiResponse(res).error(500, "SERVER_ERROR");
                });
        } catch (e: any) {
            console.log(e);
            logger.error(e.stack);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }
}
