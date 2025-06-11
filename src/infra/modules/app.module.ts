import { Module } from '@nestjs/common';
import { MongoModule } from './mongo.module';
import { ReservationModule } from './reservation.module';

@Module({
  imports: [
    MongoModule,
    ReservationModule
  ],
})
export class AppModule { }
