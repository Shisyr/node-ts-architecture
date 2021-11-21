import {SortDirection} from "./SortRequest";
import SearchRequest from "./SearchRequest";

export type SortByUser = 'id' | 'firstName' | 'lastName' | 'email' | 'age';

export type SortRequestType = Record<SortByUser, SortDirection>;

class SearchUserRequest extends SearchRequest {
  order: SortRequestType;
}

export default SearchUserRequest;