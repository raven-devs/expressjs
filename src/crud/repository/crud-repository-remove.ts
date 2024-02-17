export interface CrudRepositoryRemove<T> {
  remove(id: string): T;
}
