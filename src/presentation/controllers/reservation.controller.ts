import { CreateReservationUseCase } from "@/domain/usecases/reservation/create-reservation.usecase";
import { DeleteReservationUseCase } from "@/domain/usecases/reservation/delete-reservation.usecase";
import { ReadReservationUseCase } from "@/domain/usecases/reservation/read-reservation.usecase";
import { Controller, Delete, Get, Param, Post } from "@nestjs/common";

@Controller('reservation')
export class ReservationController {
    constructor(
        private readonly readReservation: ReadReservationUseCase,
        private readonly createReservation: CreateReservationUseCase,
        private readonly deleteReservation: DeleteReservationUseCase
    ) { }

    @Get('read')
    async read() { }

    @Post('create')
    async create() { }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) { }

}