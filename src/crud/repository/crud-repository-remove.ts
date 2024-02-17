export interface CrudRepositoryRemove<T> {
  remove(id: string): Promise<T>;
}
