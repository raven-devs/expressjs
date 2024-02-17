export interface CrudRepositoryFindAll<T> {
  findAll(): Promise<T[]>;
}
