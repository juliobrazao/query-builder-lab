import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { CreateReservationUseCase } from "@/domain/usecases/reservation/create-reservation.usecase";
import { DeleteReservationUseCase } from "@/domain/usecases/reservation/delete-reservation.usecase";
import { ReadReservationUseCase } from "@/domain/usecases/reservation/read-reservation.usecase";
import { ReservationCreateRequestDTO } from "../dtos/reservation/reservation-create.request.dto";
import { ReservationReadRequestDTO } from "../dtos/reservation/reservation-read.request.dto";
import { ReservationReadResponseDTO } from "../dtos/reservation/reservation-read.response.dto";
import { ReservationCreateResponseDTO } from "../dtos/reservation/reservation-create.response.dto";
import { ReservationDeleteResponseDTO } from "../dtos/reservation/reservation-delete.response.dto";

@Controller('reservation')
export class ReservationController {
    constructor(
        private readonly readReservation: ReadReservationUseCase,
        private readonly createReservation: CreateReservationUseCase,
        private readonly deleteReservation: DeleteReservationUseCase
    ) { }

    @Get('read')
    async read(
        @Query() readParams: ReservationReadRequestDTO
    ): Promise<ReservationReadResponseDTO[]> {
        try {
            return this.readReservation.execute({ ...readParams })
        } catch (err) {
            throw new Error(err)
        }
    }

    @Post('create')
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(
        @Body() reservationParams: ReservationCreateRequestDTO
    ): Promise<ReservationCreateResponseDTO> {
        try {
            return await this.createReservation.execute({ ...reservationParams })
        } catch (err) {
            throw new Error(err)
        }
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string): Promise<ReservationDeleteResponseDTO> {
        try {
            return this.deleteReservation.execute(id)
        } catch (err) {
            throw new Error(err)
        }
    }
}