
export interface PageRequestInterface {
  limit: number;
  page: number;
}


class PageRequest {
  take: number;
  skip: number;

  setPagination(pageRequest: PageRequestInterface) {
    this.take = pageRequest.limit;
    this.skip = (pageRequest.page - 1) * pageRequest.limit;
  }
}

export default PageRequest;