export interface CrudServiceRemove<T> {
  remove(id: string): Promise<T>;
}
