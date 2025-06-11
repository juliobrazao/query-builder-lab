import { LaboratoryEntity } from '@/domain/entities/laboratory.entity';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { CreateLaboratoryParams } from '@/domain/shared/create-laboratory.params';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateLaboratoryUseCase {
  constructor(
    private readonly laboratoryRepository: ILaboratoryRepository<
      LaboratoryEntity,
      CreateLaboratoryParams
    >,
  ) {}

  async execute(params: CreateLaboratoryParams): Promise<LaboratoryEntity> {
    const newLaboratory: LaboratoryEntity = {
      name: params.name,
      location: params.location,
      capacity: params.capacity,
      deskList: params.deskList,
      isAvailable: params.isAvailable,
      createdAt: +new Date(),
    };

    return await this.laboratoryRepository.create(newLaboratory);
  }
}
