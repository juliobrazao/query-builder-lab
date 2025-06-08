import { CreateLaboratoryUseCase } from '@/domain/usecases/laboratory/create-laboratory.usecase';
import {
  Body,
  Controller,
  Get,
  Patch,
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
import { UpdateLaboratoryResponseDTO } from '../dtos/laboratory/update-laboratory.response.dto';
import { UpdateLaboratoryUseCase } from '@/domain/usecases/laboratory/update-laboratory.usecase';
import { UpdateLaboratoryRequestDTO } from '../dtos/laboratory/update-laboratory.request.dto';

@Controller('laboratory')
export class LaboratoryController {
  constructor(
    private readonly createLaboratoryUseCase: CreateLaboratoryUseCase,
    private readonly readLaboratoryUseCase: ReadLaboratoryUseCase,
    private readonly updateLaboratoryUseCase: UpdateLaboratoryUseCase,
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

  @Patch('update')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Query() id: string,
    @Body() laboratoryParams: UpdateLaboratoryRequestDTO,
  ): Promise<UpdateLaboratoryResponseDTO> {
    try {
      return await this.updateLaboratoryUseCase.execute(id, laboratoryParams);
    } catch (err) {
      throw new Error(err);
    }
  }
}
