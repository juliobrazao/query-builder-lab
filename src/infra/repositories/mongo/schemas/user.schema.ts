import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ name: 'is_admin' })
  isAdmin: boolean;

  @Prop({ name: 'is_active' })
  isActive: boolean;

  @Prop({ name: 'created_at' })
  createdAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
