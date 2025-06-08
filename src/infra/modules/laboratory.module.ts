import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Laboratory,
  LaboratorySchema,
} from '@/infra/repositories/mongo/schemas/laboratory.schema';
import { ILaboratoryRepository } from '@/domain/repositories/abstract-laboratory.repository';
import { LaboratoryService } from '@/infra/providers/laboratory.service';
import { CreateLaboratoryUseCase } from '@/domain/usecases/laboratory/create-laboratory.usecase';
import { LaboratoryController } from '@/presentation/controllers/laboratory.controller';
import { ReadLaboratoryUseCase } from '@/domain/usecases/laboratory/read-laboratory.usecase';

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
    CreateLaboratoryUseCase,
    ReadLaboratoryUseCase,
  ],
  controllers: [LaboratoryController],
  exports: [ILaboratoryRepository],
})
export class LaboratoryModule {}
