import { InjectModel } from '@nestjs/mongoose';
import {
  Laboratory,
  LaboratoryDocument,
} from '../repositories/mongo/schemas/laboratory.schema';
import { Model } from 'mongoose';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { LaboratoryEntity } from '@/domain/entities/laboratory.entity';
import { LaboratoryParams } from '@/domain/shared/laboratory.params';

export class LaboratoryService
  implements ILaboratoryRepository<LaboratoryEntity, LaboratoryParams>
{
  constructor(
    @InjectModel(Laboratory.name)
    private laboratoryModel: Model<LaboratoryDocument>,
  ) {}

  async create(params: LaboratoryParams): Promise<LaboratoryEntity> {
    return await this.laboratoryModel.create(params);
  }
}
