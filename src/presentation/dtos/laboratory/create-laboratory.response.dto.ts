import { ObjectId } from 'mongoose';

export class CreateLaboratoryResponseDTO {
  _id?: ObjectId | string;
  name: string;
  location: string;
  capacity: number;
  isAvailable: boolean;
  createdAt: number;
  __v?: number;
}
