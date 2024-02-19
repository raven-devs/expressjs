export interface CrudServiceFindAll<T> {
  findAll(): Promise<T[]>;
}
