/* eslint-disable camelcase */
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4, v4 } from "uuid";

export interface IExpenditure extends Document {
    user_id: string;
    score: number;
    title: string;
    type: string;
    receiver: string;
    created_at: Date | number;
    updated_at: Date | number;
    deleted_at: Date | number;
    expend: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExpenditureSchema: any = new Schema(
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
        score: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            enum: ["card", "phone", "charity"],
            default: "phone"
        },
        receiver: {
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
        },
        expend: {
            type: Boolean,
            default: false
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

export default mongoose.model<IExpenditure>("ExpenditureModel", ExpenditureSchema);
