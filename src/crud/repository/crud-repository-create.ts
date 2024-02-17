export interface CrudRepositoryCreate<T> {
  create(createDto: Partial<T>): Promise<T>;
}
