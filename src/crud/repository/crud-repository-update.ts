export interface CrudRepositoryUpdate<T> {
  update(id: string, updateDto: Partial<T>): Promise<T>;
}
