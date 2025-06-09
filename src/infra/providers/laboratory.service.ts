import { InjectModel } from '@nestjs/mongoose';
import {
  Laboratory,
  LaboratoryDocument,
} from '@/infra/repositories/mongo/schemas/laboratory.schema';
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

  async read(params: Partial<LaboratoryParams>): Promise<LaboratoryEntity[]> {
    return await this.laboratoryModel.find({ ...params });
  }

  async update(
    id: string,
    params: Partial<LaboratoryParams>,
  ): Promise<LaboratoryEntity> {
    const updatedLaboratory = await this.laboratoryModel.findOneAndUpdate(
      { _id: id['id'] },
      { ...params },
      { new: true },
    );

    if (!updatedLaboratory) {
      throw new Error('Failed to update the laboratory.');
    }

    return updatedLaboratory;
  }

  async delete(id: string): Promise<LaboratoryEntity> {
    const laboratoryToDelete = await this.laboratoryModel.findByIdAndDelete({
      _id: id,
    });

    if (!laboratoryToDelete) {
      throw new Error('Cannot find this laboratory!');
    }

    return laboratoryToDelete;
  }
}
