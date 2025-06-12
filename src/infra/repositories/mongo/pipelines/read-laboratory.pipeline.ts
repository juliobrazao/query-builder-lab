import { LaboratoryParams } from '@/domain/shared/laboratory.params';
import { PipelineStage } from 'mongoose';

export function readLaboratoryPipeline({
  name,
  location,
  capacity,
  isAvailable,
}: Partial<LaboratoryParams>): PipelineStage[] {
  const pipeline: PipelineStage[] = [];

  if (name) {
    pipeline.push({
      $match: {
        name: name,
      },
    });
  }

  if (location) {
    pipeline.push({
      $match: {
        location: location,
      },
    });
  }

  if (capacity) {
    pipeline.push({
      $match: {
        capacity: Number(capacity),
      },
    });
  }

  if (isAvailable) {
    pipeline.push({
      $match: {
        is_available: Boolean(isAvailable),
      },
    });
  }

  return pipeline;
}
