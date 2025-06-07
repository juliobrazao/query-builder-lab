import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema({ collection: 'reservations' })
export class Reservation {
  @Prop()
  laboratoryId: string;

  @Prop()
  userId: string;

  @Prop()
  createdAt: number;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
