import { CreateLaboratoryUseCase } from '@/domain/usecases/laboratory/create-laboratory.usecase';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateLaboratoryRequestDTO } from '@/presentation/dtos/laboratory/create-laboratory.request.dto';
import { CreateLaboratoryResponseDTO } from '@/presentation/dtos/laboratory/create-laboratory.response.dto';

@Controller('laboratory')
export class LaboratoryController {
  constructor(
    private readonly createLaboratoryUseCase: CreateLaboratoryUseCase,
  ) {}

  @Post('new')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() laboratoryParams: CreateLaboratoryRequestDTO,
  ): Promise<CreateLaboratoryResponseDTO> {
    try {
      return await this.createLaboratoryUseCase.execute(laboratoryParams);
    } catch (err) {
      throw new Error(err);
    }
  }
}
