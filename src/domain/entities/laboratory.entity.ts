export class LaboratoryEntity {
  name: string;
  location: string;
  capacity: number;
  isAvailable: boolean;
  createdAt: number;

  constructor(params: Partial<LaboratoryEntity>) {
    Object.assign(this, params);
  }
}
