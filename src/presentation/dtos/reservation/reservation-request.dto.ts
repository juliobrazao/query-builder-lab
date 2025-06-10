import { IsString } from "class-validator";

export class ReservationRequestDTO {
    @IsString({ message: 'laboratoryId cannot be empty!' })
    laboratoryId: string;

    @IsString({ message: 'userId cannot be empty!' })
    userId: string;
}