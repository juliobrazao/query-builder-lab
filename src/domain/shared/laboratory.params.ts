interface Desk {
  capacity: 1 | 2 | 4;
  type: 'wood' | 'metal';
}

export interface LaboratoryParams {
  name: string;
  location: string;
  capacity: number;
  deskList: Desk[];
  isAvailable: boolean;
  createdAt: number;
}
