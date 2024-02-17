export interface CrudRepositoryFindOne<T> {
  findOne(id: string): T;
}
