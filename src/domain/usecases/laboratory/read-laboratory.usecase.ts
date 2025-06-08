import { LaboratoryEntity } from '@/domain/entities/laboratory.entity';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { ReadLaboratoryParams } from '@/domain/shared/read-laboratory.params';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadLaboratoryUseCase {
  constructor(
    private readonly laboratoryRepository: ILaboratoryRepository<
      LaboratoryEntity,
      ReadLaboratoryParams
    >,
  ) {}

  async execute(params: ReadLaboratoryParams): Promise<LaboratoryEntity[]> {
    return await this.laboratoryRepository.read(params);
  }
}
