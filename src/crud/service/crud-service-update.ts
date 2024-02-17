export interface CrudServiceUpdate<T> {
  update(id: string, updateDto: Partial<T>): T;
}
