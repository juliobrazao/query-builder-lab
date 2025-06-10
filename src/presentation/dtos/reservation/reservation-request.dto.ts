import { IsString } from "class-validator";

export class ReservationRequestDTO {
    @IsString()
    laboratoryId: string;

    @IsString()
    userId: string;
}