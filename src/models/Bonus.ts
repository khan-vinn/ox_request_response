/* eslint-disable camelcase */
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4, v4 } from "uuid";

export interface IBonus extends Document {
    user_id: string;
    survey_id: string;
    survey_score: number;
    category: string;
    survey_title: string;
    created_at: Date | number;
    updated_at: Date | number;
    deleted_at: Date | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BonusSchema: any = new Schema(
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
        survey_id: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        survey_score: {
            type: Number,
            default: 0
        },
        survey_title: {
            type: String,
            default: ""
        },
        created_at: {
            type: Date
        },
        updated_at: {
            type: Date
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

export default mongoose.model<IBonus>("BonusModel", BonusSchema);
