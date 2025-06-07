import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LaboratoryDocument = Laboratory & Document;

@Schema({ collection: 'laboratories' })
export class Laboratory {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  capacity: number;

  @Prop()
  isAvailable: boolean;

  @Prop()
  createdAt: number;
}

export const LaboratorySchema = SchemaFactory.createForClass(Laboratory);
