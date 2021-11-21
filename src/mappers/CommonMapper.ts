import PageableDto from "../dto/PageableDto";

class CommonMapper {
  constructor() {}

  static toFindAll<T>(data: T[], totalCount: number): PageableDto<T> {
    const pageableUsers = new PageableDto<T>();
    pageableUsers.list = data;
    pageableUsers.totalCount = totalCount;
    return pageableUsers;
  }
}


export default CommonMapper;