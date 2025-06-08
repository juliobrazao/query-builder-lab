import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Laboratory,
  LaboratorySchema,
} from '@/infra/repositories/mongo/schemas/laboratory.schema';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { LaboratoryService } from '@/infra/providers/laboratory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Laboratory.name,
        schema: LaboratorySchema,
      },
    ]),
  ],
  providers: [
    {
      provide: ILaboratoryRepository,
      useClass: LaboratoryService,
    },
  ],
  exports: [ILaboratoryRepository],
})
export class LaboratoryModule {}
