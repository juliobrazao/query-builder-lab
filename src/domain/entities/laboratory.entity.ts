class Desk {
  capacity: 1 | 2 | 4;
  type: 'wood' | 'metal';
}

export class LaboratoryEntity {
  name: string;
  location: string;
  capacity: number;
  deskList: Desk[];
  isAvailable: boolean;
  createdAt: number;

  constructor(params: Partial<LaboratoryEntity>) {
    Object.assign(this, params);
  }
}
