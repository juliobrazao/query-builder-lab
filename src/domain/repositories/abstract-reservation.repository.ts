export abstract class IReservationRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
  abstract read(params: Partial<Params>): Promise<Entity[]>;
  abstract delete(id: string): Promise<Entity>;
}
