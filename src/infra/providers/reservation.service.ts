import { ReservationEntity } from "@/domain/entities/reservation.entity";
import { IReservationRepository } from "@/domain/repositories/abstract-reservation.repository";
import { ReservationParams } from "@/domain/shared/reservation/reservation.params";
import { Reservation, ReservationDocument } from "../repositories/mongo/schemas/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class ReservationService
    implements IReservationRepository<ReservationEntity, ReservationParams> {

    constructor(
        @InjectModel(Reservation.name)
        private reservationModel: Model<ReservationDocument>,
    ) { }

    async create(params: ReservationParams): Promise<ReservationEntity> {
        return await this.reservationModel.create({ ...params });
    }

    async delete(id: string): Promise<ReservationEntity> {
        const reservationToDelete = await this.reservationModel.findByIdAndDelete({
            _id: id
        });

        if (!reservationToDelete) {
            throw new Error('Cannot find this Reservation!');
        }

        return reservationToDelete;
    }

    async read(params: Partial<ReservationParams>): Promise<ReservationEntity[]> {
        return await this.reservationModel.find({ ...params });
    }

}