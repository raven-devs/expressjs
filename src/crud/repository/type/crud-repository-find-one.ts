export interface CrudRepositoryFindOne<T> {
  findOne(id: string): Promise<T>;
}
