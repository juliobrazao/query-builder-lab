import { LaboratoryParams } from './laboratory.params';

export interface CreateLaboratoryParams
  extends Omit<LaboratoryParams, 'createdAt'> {}
