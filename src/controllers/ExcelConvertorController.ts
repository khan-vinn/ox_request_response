/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ApiResponse } from "../lib/ApiResponse";
import logger from "../config/logger";
import ResponseModel, { IResponce } from "../models/Response";
import fetch from "node-fetch";
import xlsx from "xlsx";
import minioClient from "../config/minio";

function emptyArray(arr: any, res: any) {
    if (arr === undefined || null) {
        logger.error(`${arr}_NOT_FOUND`, arr);
        const e = new Error("errorrrrrrr");
        console.log(e.stack);
        return new ApiResponse(res).error(404, "RESPONSES_NOT_FOUND");
    }
}

export default class {
    async convert(req: Request, res: Response): Promise<any> {
        try {
            const survey_id = req.params.survey_id;
            const manager_id = req.params.manager_id;
            let limit: any = req.query.limit || 5;
            let page: any = req.query.page || 0;
            page = parseInt(page, 10);
            limit = parseInt(limit, 10);
            const allResponses = await ResponseModel.find({
                survey_id,
                manager_id
            });
            // console.log(allResponses);

            if (allResponses.length === 0) {
                logger.error("RESPONSES_NOT_FOUND");
                return new ApiResponse(res).error(404, "RESPONSES_NOT_FOUND");
            }
            const count = await ResponseModel.countDocuments({
                survey_id,
                manager_id
            });
            const header = [
                "id",
                "language",
                "status",
                "user_id",
                "survey_id",
                "manager_id",
                "started_at",
                "updated_at"
            ];

            let surveys: any;
            await fetch(
                `https://api-manager.oxbox.uz/v1/survey/${survey_id}/all`
            )
                .then((res) => res.json())
                .then((json) => {
                    surveys = json;
                })
                .catch((e) => {
                    logger.error("Error with fetch surveys:\n", e);
                    return new ApiResponse(res).error(500, "SERVER_ERROR");
                });
            // console.log(surveys);

            emptyArray(surveys.questions, res);
            surveys.questions.forEach((element1: any, index1: any) => {
                header.push(`Q${index1 + 1}_id`);
                // header.push(`Q${index1 + 1}_type`);
                // header.push(`Q${index1 + 1}_label`);
                // header.push(`Q${index1 + 1}_created_at`);
                // header.push(`Q${index1 + 1}_updated_at`);
                if (element1.type === "text")
                    header.push(`Q${index1 + 1}`);
                if (element1.type === "number")
                    header.push(`Q${index1 + 1}`);
                if (element1.type === "scale")
                    header.push(`Q${index1 + 1}`);
                if (element1.type === "radio")
                    header.push(`Q${index1 + 1}`);
                if (element1.type === "date")
                    header.push(`Q${index1 + 1}`);
                if (element1.type === "checkbox") {
                    emptyArray(element1.data.answers, res);
                    element1.data.answers.forEach(
                        (element: any, index2: number) => {
                            header.push(
                                `Q${index1 + 1}_${index2 + 1}`
                            );
                        }
                    );
                }
                if (element1.type === "matrix-single") {
                    emptyArray(element1.data.answers, res);
                    console.log("single\n", element1.data.answers);
                    element1.data.answers.forEach((e: any, i: number) => {
                        header.push(
                            `Q${index1 + 1}_${i + 1}_1`
                        );
                        header.push(
                            `Q${index1 + 1}_${i + 1}_2`
                        );
                    });
                }

                if (element1.type === "matrix-multiple") {
                    emptyArray(element1.data.answers, res);
                    console.log("mmultiple: \n", element1);
                    element1.data.answers.forEach((e: any, i: number) => {
                        header.push(
                            `Q${index1 + 1}_${i + 1}_1`
                        );
                        emptyArray(element1.data.columns, res);
                        console.log("mmultiple: \n", element1);
                        element1.data.columns.forEach((e: any, j: number) => {
                            header.push(
                                `Q${index1 + 1}_${i + 1}_2_${
                                    j + 1
                                }`
                            );
                        });
                    });
                }
            });
            let data: any = [];
            emptyArray(allResponses, res);
            allResponses.forEach((element) => {
                let response: any = [];
                response.push(element._id);
                response.push(element.language);
                response.push(element.status);
                response.push(element.user_id);
                response.push(element.survey_id);
                response.push(element.manager_id);
                response.push(element.started_at);
                response.push(element.updated_at);
                emptyArray(surveys.questions, res);
                if (surveys.questions === undefined) {
                    console.log("138 line", surveys);
                }
                surveys.questions.forEach((element1: any, index1: any) => {
                    if (element.questions === undefined) {
                        logger.error("questions not found", element);
                    }
                    let i = element.questions.find((q) => q.id === element1.id);
                    // console.log("i:", i);
                    response.push(i ? i.id : "#NULL!");
                    // response.push(i && i.type ? i.type : "#NULL!");
                    // response.push(i && i.label ? i.label : "#NULL!");
                    // response.push(i && i.created_at ? i.created_at : "#NULL!");
                    // response.push(i && i.updated_at ? i.updated_at : "#NULL!");
                    if (element1.type === "text" || element1.type === "number" || element1.type === "scale")
                        response.push(i?.answer.text || "#NULL!");
                    if (element1.type === "radio")
                        response.push(i?.answer.answer || "#NULL!");
                    if (element1.type === "date")
                        response.push(i?.answer.date || "#NULL!");
                    if (element1.type === "checkbox") {
                        emptyArray(element1.data.answers, res);
                        element1.data.answers.forEach(
                            (e: any, index: number) => {
                                response.push(
                                    i?.answer.answers[index]
                                        ? i?.answer.answers[index]
                                        : "#NULL!"
                                );
                            }
                        );
                    }
                    if (element1.type === "matrix-single") {
                        emptyArray(element1.data.answers, res);
                        if (element1.data.answers === undefined) {
                            console.log("171", element1);
                        }
                        element1.data.answers.forEach(
                            (e: any, index: number) => {
                                response.push(
                                    i?.answer.matrix[index].row_id
                                        ? i?.answer.matrix[index].row_id
                                        : "#NULL!"
                                );
                                response.push(
                                    i?.answer.matrix[index].column
                                        ? i?.answer.matrix[index].column
                                        : "#NULL!"
                                );
                            }
                        );
                    }
                    if (element1.type === "matrix-multiple") {
                        emptyArray(element1.data.answers, res);
                        element1.data.answers.forEach(
                            (e: any, index: number) => {
                                response.push(
                                    i?.answer.matrix[index].row_id
                                        ? i?.answer.matrix[index].row_id
                                        : "#NULL!"
                                );
                                emptyArray(element1.data.columns, res);
                                element1.data.columns.forEach(
                                    (e: any, j: number) => {
                                        response.push(
                                            i?.answer.matrix[index].columns[j]
                                                ? i?.answer.matrix[index]
                                                      .columns[j]
                                                : "#NULL!"
                                        );
                                    }
                                );
                            }
                        );
                    }
                });
                data.push(response);
            });
            var ws = xlsx.utils.aoa_to_sheet([header]);

            const newWS = xlsx.utils.sheet_add_aoa(ws, data, { origin: -1 });
            // const wscols = [{ wpx: 300 }, { wpx: 200 }];

            const book = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(book, newWS, "report");
            // newWS["!cols"] = wscols;

            // const file_name = Date.now();
            const file_name = `report_${Date.now()}.xlsx`;

            const buf = xlsx.write(book, { type: "buffer", bookType: "xlsx" });
            let url;
            let uploadMinio = new Promise<void>((resolve, reject) => {
                minioClient.putObject(
                    "oxbox",
                    "excel/" + file_name,
                    buf,
                    function (error, etag) {
                        if (error)
                            reject(
                                new Error(
                                    "Error occured on creating certficate file"
                                )
                            );
                        logger.debug(
                            "Certificate with ID " +
                                file_name +
                                " is generated and uploaded",
                            {
                                result: file_name,
                                label: "certificate-generate"
                            }
                        );
                        url = `https://cdn.oxbox.uz/oxbox/excel/${file_name}`;
                        resolve();
                        // return url;
                    }
                );
            });

            let uploadedPdf = await uploadMinio;
            return new ApiResponse(res).success(url);
        } catch (e:any) {
            logger.error(e.stack);
            return new ApiResponse(res).error(500, "SERVER_ERROR");
        }
    }
}
