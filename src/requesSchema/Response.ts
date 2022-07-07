/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from "joi";

interface ResponseSchema {
    get: Joi.Schema<any>;
    create: Joi.Schema<any>;
    update: Joi.Schema<any>;
    delete: Joi.Schema<any>;
}

const schema: ResponseSchema = {
    get: Joi.object().keys({
        params: Joi.object().keys({
            id: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        })
    }),
    create: Joi.object().keys({
        body: Joi.object().keys({
            user_id: Joi.string().required(),
            // .regex(/^[0-9a-fA-F]{24}$/)
            language: Joi.string().required(),
            number: Joi.number().required(),
            survey_id: Joi.string().required(),
            question: Joi.object().keys({
                id: Joi.string().required(),
                label: Joi.string().required(),
                number: Joi.number().required(),
                photo: Joi.string().required(),
                description: Joi.string(),
                answer: Joi.object().keys({
                    text: Joi.string().required(),
                    answer: Joi.string().required(),
                    answers: Joi.string().required(),
                    column: Joi.string().required(),
                    columns: Joi.string().required(),
                    texts: Joi.string().required()
                }),
                answers: Joi.array().items({
                    id: Joi.string().required(),
                    order: Joi.number().required(),
                    label: Joi.string().required()
                }),
                columns: Joi.array().items({
                    id: Joi.string().required(),
                    order: Joi.number().required(),
                    label: Joi.string().required()
                }),
                type: Joi.string().required()
            }),
            status: Joi.string(),
            started_at: Joi.string(),
            finished_at: Joi.string()
        })
    }),
    update: Joi.object().keys({
        params: Joi.object().keys({
            id: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        }),
        body: Joi.object()
            .keys({
                name: Joi.string().required(),
                description: Joi.string()
                // group: Joi.string().required(),
            })
            .required()
    }),
    delete: Joi.object().keys({
        params: Joi.object().keys({
            manager_id: Joi.string().required().guid(),
            survey_id: Joi.string().required().guid()
        }).required(),
        body: Joi.object()
        .keys({
            answers_id: Joi.array()
        }).required()
    })
};

export default schema;
