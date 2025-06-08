import { LaboratoryEntity } from '@/domain/entities/laboratory.entity';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { UpdateLaboratoryParams } from '@/domain/shared/update-laboratory.params';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateLaboratoryUseCase {
  constructor(
    private readonly laboratoryRepository: ILaboratoryRepository<
      LaboratoryEntity,
      UpdateLaboratoryParams
    >,
  ) {}

  async execute(
    id: string,
    params: UpdateLaboratoryParams,
  ): Promise<LaboratoryEntity> {
    return await this.laboratoryRepository.update(id, params);
  }
}
