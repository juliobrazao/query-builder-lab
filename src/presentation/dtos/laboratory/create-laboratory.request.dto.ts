import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateLaboratoryRequestDTO {
  @ApiProperty({
    description: 'Name for laboratory',
    example: 'Example Laborat',
  })
  @IsString({ message: 'Name cannot be empty!' })
  name: string;

  @ApiProperty({
    description: 'Location for laboratory',
    example: 'Main Pavillion',
  })
  @IsString({ message: 'Location cannot be empty!' })
  location: string;

  @ApiProperty({
    description: 'Capacity number for laboratory',
    example: 20,
  })
  @IsInt({ message: 'You must set capacity for lab.' })
  capacity: number;

  @ApiProperty({
    description: 'Boolean to define if laboratory is available or not.',
    example: false,
  })
  @IsBoolean({ message: 'You must inform if it is available.' })
  isAvailable: boolean;
}
