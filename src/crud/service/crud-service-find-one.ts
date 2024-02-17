export interface CrudServiceFindOne<T> {
  findOne(id: string): Promise<T>;
}
