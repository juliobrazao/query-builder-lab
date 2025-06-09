import { LaboratoryEntity } from '@/domain/entities/laboratory.entity';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteLaboratoryUseCase {
  constructor(
    private readonly laboratoryRepository: ILaboratoryRepository<
      LaboratoryEntity,
      string
    >,
  ) {}

  async execute(id: string): Promise<LaboratoryEntity> {
    return await this.laboratoryRepository.delete(id);
  }
}
