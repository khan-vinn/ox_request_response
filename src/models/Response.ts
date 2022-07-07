/* eslint-disable camelcase */
import { required, string } from "joi";
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4, v4 } from "uuid";

export interface IResponce extends Document {
    user_id: string;
    language: string;
    number: number;
    manager_id: string;
    survey_id: string;
    device : string;
    login : string;
    username : string;
    operator_id : string;
    // geolocation: {
    //     lat: number;
    //     long: number;
    // };
    questions: [
        {
            id: string;
            number: number;
            label: string;
            description: string;
            photo: string;
            answer: {
                text: string;
                answer: string;
                date: Date;
                answers: [string];
                matrix: [{ row_id: string; column: string; columns: [string]}];
                texts: [string];
                number: number;
            };
            answers: [
                {
                    id: string;
                    order: number;
                    code: number;
                    label: string;
                    is_open_value: boolean;
                }
            ];
            columns: [
                {
                    id: string;
                    order: number;
                    code: number;
                    label: string;
                }
            ];
            type: string;
            created_at: Date;
            updated_at: Date;
        }
    ];
    status: string;
    started_at: Date;
    updated_at: Date | number;
    finished_at: Date;
    deleted_at: Date;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResponseSchema: any = new Schema(
    {
        _id: {
            type: String,
            default: function genUUID() {
                return v4();
            }
        },
        user_id: {
            type: String,
            required: true
        },
        language: {
            type: String,
            default: "ru"
        },
        number: {
            type:{type:Number},
            default: 0
            // required: true
        },
        manager_id: {
            type: String
        },
        survey_id: {
            type: String,
            required: true
        },
        device: {
            type: String,
            default: "mobile"
        },
        username: {
            type: String
        },
        login: {
            type: String
        },
        operator_id: {
            type: String
        },
        geolocation: {
            lat: {
                type:{type:Number},
            },
            long: {
                type:{type:Number}
            }
        },
        questions: [
            {
                _id: false,
                id: {
                    type: String
                    // required: true
                },
                number: {
                    type:{type:Number}
                    // default: ""
                },
                label: {
                    type: String
                    // required: true
                },
                description: {
                    type: String
                    // default: ""
                },
                photo: {
                    data: String
                    // default: ""
                },
                answer: {
                    text: {
                        type: String
                        // default: ""
                    },
                    answer: {
                        type: String
                        // default: uuidv4()
                    }, // answer id, for radio question type
                    answers: {
                        type: [String]
                        // default: uuidv4()
                    }, // answer ids, for checkbox question type
                    matrix: [
                        {
                            _id: {
                                type: String,
                                default: function genUUID() {
                                    return v4();
                                }
                            },
                            row_id: { type: String }, // row (answer) id
                            column: {
                                type: String
                                // default: uuidv4()
                            }, // column id, for matrix-single question types
                            columns: {
                                type: [String]
                                // default: uuidv4()
                            } // column ids, for matrix-multiple question types,
                        }
                    ],
                    texts: {
                        type: [String]
                    },
                    number: {
                        type:{type:Number}
                    },
                    date: {
                        type: Date
                    }
                },
                answers: [
                    {
                        _id: false,
                        id: {
                            type: String,
                            default: uuidv4()
                        },
                        order: {
                            type:{type:Number},
                            default: 0
                        },
                        code: {
                            type:{type:Number},
                            default: 0
                        },
                        label: {
                            type: String
                        }, //label=language
                        is_open_value: {
                            type: Boolean,
                            default: false
                        }
                    }
                ],
                columns: [
                    {
                        _id: false,
                        id: {
                            type: String,
                            default: uuidv4()
                        },
                        order: {
                            type:{type:Number},
                            default: 0
                        },
                        code: {
                            type:{type:Number},
                            default: 0
                        },
                        label: {
                            type: String,
                            default: ""
                        }
                    }
                ],
                type: {
                    type: String,
                    enum: [
                        "info",
                        "radio",
                        "checkbox",
                        "text",
                        "number",
                        "date",
                        "matrix-single",
                        "matrix-multiple",
                        "matrix-text",
                        "scale"
                    ],
                    default: "text"
                },
                created_at: {
                    type: Date
                },
                updated_at: {
                    type: Date
                }
            }
        ],
        status: {
            type: String,
            enum: ["visited", "started", "completed", "cancelled", "finished","fullquota"],
            default: "visited"
        },
        started_at: {
            type: Date,
            default: Date.now
        },
        finished_at: {
            type: Date
        },
        updated_at: {
            type: Date
            // default: Date.now
        },
        deleted_at: {
            type: Date
        }
    },
    {
        // timestamps: true,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

export default mongoose.model<IResponce>("ResponseModel", ResponseSchema);
