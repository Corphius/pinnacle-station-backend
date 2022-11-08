export interface IserviceCRUD {
  create(dto: any): Promise<any>;
  update(entityUpdate: any): Promise<any>;
  getAllRegistersWithFilters(filters: any): Promise<any>;
  getById(id: string): Promise<any>;
  deleteById(id: string): Promise<any>;
}
