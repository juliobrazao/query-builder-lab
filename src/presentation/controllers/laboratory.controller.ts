import { CreateLaboratoryUseCase } from '@/domain/usecases/laboratory/create-laboratory.usecase';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateLaboratoryRequestDTO } from '@/presentation/dtos/laboratory/create-laboratory.request.dto';
import { CreateLaboratoryResponseDTO } from '@/presentation/dtos/laboratory/create-laboratory.response.dto';
import { ReadLaboratoryUseCase } from '@/domain/usecases/laboratory/read-laboratory.usecase';
import { ReadLaboratoryRequestDTO } from '@/presentation/dtos/laboratory/read-laboratory.request.dto';
import { ReadLaboratoryResponseDTO } from '../dtos/laboratory/read-laboratory.response.dto';

@Controller('laboratory')
export class LaboratoryController {
  constructor(
    private readonly createLaboratoryUseCase: CreateLaboratoryUseCase,
    private readonly readLaboratoryUseCase: ReadLaboratoryUseCase,
  ) {}

  @Post('create')
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

  @Get('read')
  async read(
    @Query() laboratoryParams: ReadLaboratoryRequestDTO,
  ): Promise<ReadLaboratoryResponseDTO[]> {
    try {
      return await this.readLaboratoryUseCase.execute(laboratoryParams);
    } catch (err) {
      throw new Error(err);
    }
  }
}
