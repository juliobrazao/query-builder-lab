import { ReservationEntity } from "@/domain/entities/reservation.entity";
import { IReservationRepository } from "@/domain/repositories/abstract-reservation.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteReservationUseCase {
    constructor(
        private readonly reservationRepository: IReservationRepository<
            ReservationEntity,
            string
        >
    ) { }

    async execute(id: string): Promise<ReservationEntity> {
        return await this.reservationRepository.delete(id)
    }
} 