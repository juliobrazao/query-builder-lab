export class ReservationEntity {
  laboratoryId: string;
  userId: string;
  createdAt: number;

  constructor(params: Partial<ReservationEntity>) {
    Object.assign(this, params);
  }
}
