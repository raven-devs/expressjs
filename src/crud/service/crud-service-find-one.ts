export interface CrudServiceFindOne<T> {
  findOne(id: string): T;
}
