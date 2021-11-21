export type SortDirection = 'ASC' | 'DESC';

export interface SortRequestInterface {
  sortBy: string;
  sortDirection: SortDirection;
}

class SortRequest {
  order: Record<string, SortDirection>;

  setSort(sortRequest: SortRequestInterface) {
    this.order = {
      [sortRequest.sortBy]: sortRequest.sortDirection
    }
  }
}

export default SortRequest;
