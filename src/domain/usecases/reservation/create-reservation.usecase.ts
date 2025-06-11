import { ReservationEntity } from "@/domain/entities/reservation.entity";
import { IReservationRepository } from "@/domain/repositories/abstract-reservation.repository";
import { CreateReservationParams } from "@/domain/shared/reservation/create-reservation.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateReservationUseCase {
    constructor(
        private readonly resarvationRepository: IReservationRepository<
            ReservationEntity,
            CreateReservationParams
        >
    ) { }

    async execute(params: CreateReservationParams): Promise<ReservationEntity> {
        const reservation = new ReservationEntity({
            userId: params.userId,
            laboratoryId: params.laboratoryId,
            createdAt: +new Date()
        })
        return this.resarvationRepository.create(reservation)
    }
}