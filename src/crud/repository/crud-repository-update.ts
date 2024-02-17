export interface CrudRepositoryUpdate<T> {
  update(id: string, updateDto: Partial<T>): T;
}
