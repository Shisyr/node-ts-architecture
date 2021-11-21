import {PageRequestInterface} from "./PageRequest";
import {SortDirection, SortRequestInterface} from "./SortRequest";

class SearchRequest {
  take: number;
  skip: number;
  order: Record<string, SortDirection>;

  setPagination(pageRequest: PageRequestInterface) {
    this.take = pageRequest.limit;
    this.skip = (pageRequest.page - 1) * pageRequest.limit;
  }

  setSort(sortRequest: SortRequestInterface) {
    this.order = {
      [sortRequest.sortBy]: sortRequest.sortDirection
    }
  }
}

export default SearchRequest;
