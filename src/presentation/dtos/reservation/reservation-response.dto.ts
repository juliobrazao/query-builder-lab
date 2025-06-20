import { ObjectId } from "mongoose";

export class RereservationResponseDTO {
    _id?: ObjectId | string;
    laboratoryId: string;
    userId: string;
    createdAt: number;
    __v?: number;
}