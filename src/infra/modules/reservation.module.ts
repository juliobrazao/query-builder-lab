import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from '../repositories/mongo/schemas/reservation.schema';
import { IReservationRepository } from '@/domain/repositories/abstract-reservation.repository';
import { ReservationService } from '../providers/reservation.service';
import { ReservationController } from '@/presentation/controllers/reservation.controller';
import { CreateReservationUseCase } from '@/domain/usecases/reservation/create-reservation.usecase';
import { DeleteReservationUseCase } from '@/domain/usecases/reservation/delete-reservation.usecase';
import { ReadReservationUseCase } from '@/domain/usecases/reservation/read-reservation.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reservation.name,
        schema: ReservationSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IReservationRepository,
      useClass: ReservationService,
    },
    CreateReservationUseCase,
    DeleteReservationUseCase,
    ReadReservationUseCase
  ],
  controllers: [ReservationController],
  exports: [IReservationRepository],
})
export class ReservationModule {}