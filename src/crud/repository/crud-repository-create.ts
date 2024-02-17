export interface CrudRepositoryCreate<T> {
  create(createDto: Partial<T>): T;
}
