import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReservationRequestDTO {
    @ApiProperty({
        description: 'laboratoryId for laboratory',
        example: 'Example 098213472189',
    })
    @IsString({ message: 'laboratoryId cannot be empty!' })
    laboratoryId: string;

    @ApiProperty({
        description: 'UserId for laboratory',
        example: 'Example 792814369217836',
    })
    @IsString({ message: 'userId cannot be empty!' })
    userId: string;
}