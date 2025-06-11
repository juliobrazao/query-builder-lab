import { ReservationEntity } from "@/domain/entities/reservation.entity";
import { IReservationRepository } from "@/domain/repositories/abstract-reservation.repository";
import { ReadReservationParams } from "@/domain/shared/reservation/read-reservation.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ReadReservationUseCase {
    constructor(
        private readonly reservationRepository:
            IReservationRepository<
                ReservationEntity,
                ReadReservationParams
            >
    ) { }

    async execute(params: ReadReservationParams): Promise<ReservationEntity[]> {
        return await this.reservationRepository.read({ ...params })
    }
}   