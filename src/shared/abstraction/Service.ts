import { IService, IRepository, IServiceReadResponse } from '../interfaces';

export abstract class AbstractService<T> implements IService<T> {
  constructor(
    protected readonly repository: IRepository<T>, // Here we expect a repository that follows the generic T interface to be injected.
  ) {}

  public async create(data: T): Promise<T> {
    return await this.repository.create(data);
  }

  public async read(page = '1', limit = '10'): Promise<IServiceReadResponse<T>> {
    let pageNumber = parseInt(page) > 0 ? parseInt(page) : 1;

    const limitNumber = parseInt(limit) > 0 ? parseInt(limit) : 10;

    const documentCountInCollection = await this.repository.countDocuments();

    if (pageNumber * limitNumber > documentCountInCollection) {
      pageNumber = Math.ceil(documentCountInCollection / limitNumber);
    }

    const paginatedData = await this.repository.read(pageNumber, limitNumber);

    return {
      totalDocs: paginatedData.totalDocs,
      docsPerPage: paginatedData.limit,
      totalPages: paginatedData.totalPages,
      currentPage: paginatedData.page,
      previousPage: paginatedData.hasPrevPage ? (paginatedData.prevPage as number) : undefined,
      nextPage: paginatedData.hasNextPage ? (paginatedData.nextPage as number) : undefined,
      docs: paginatedData.docs,
    };
  }

  public async update(id: string, data: Partial<T>): Promise<T | null> {
    return await this.repository.update(id, data);
  }

  public async delete(id: string): Promise<T | null> {
    return await this.repository.delete(id);
  }
}
