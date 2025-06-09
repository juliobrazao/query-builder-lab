export abstract class ILaboratoryRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
  abstract read(params: Partial<Params>): Promise<Entity[]>;
  abstract update(id: string, params: Partial<Params>): Promise<Entity>;
  abstract delete(id: string): Promise<Entity>;
}
