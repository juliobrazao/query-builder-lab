import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratoryModule } from './laboratory.module';
import { ReservationModule } from './reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    LaboratoryModule,
    ReservationModule
  ],
})
export class MongoModule {}
