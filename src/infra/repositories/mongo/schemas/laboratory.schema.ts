import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LaboratoryDocument = Laboratory & Document;

class Desk {
  capacity: 1 | 2 | 4;
  type: 'wood' | 'metal';
}

@Schema({ collection: 'laboratories' })
export class Laboratory {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  capacity: number;

  @Prop({ name: 'desk_list' })
  deskList: Desk[];

  @Prop({ name: 'is_available' })
  isAvailable: boolean;

  @Prop({ name: 'created_at' })
  createdAt: number;
}

export const LaboratorySchema = SchemaFactory.createForClass(Laboratory);
