import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateLaboratoryRequestDTO {
  @IsString({ message: 'Name cannot be empty!' })
  name: string;

  @IsString({ message: 'Location cannot be empty!' })
  location: string;

  @IsInt({ message: 'You must set capacity for lab.' })
  capacity: number;

  @IsBoolean({ message: 'You must inform if it is available.' })
  isAvailable: boolean;
}
