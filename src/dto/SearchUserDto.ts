import {SortByUser, SortUserDirection} from "../requests/SearchUserRequest";
import {PageRequestInterface} from "../requests/PageRequest";

class SearchUserDto {
  pageRequest: PageRequestInterface;
  sortRequest: {
    sortBy: SortByUser;
    sortDirection: SortUserDirection;
  }
}

export default SearchUserDto;