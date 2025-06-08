export abstract class ILaboratoryRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
}
