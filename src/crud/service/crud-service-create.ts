export interface CrudServiceCreate<T> {
  create(createDto: Partial<T>): T;
}