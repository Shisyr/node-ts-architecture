import CreateUserDto from "../dto/CreateUserDto";
import CreateUserRequest from "../requests/CreateUserRequest";
import UpdateUserDto from "../dto/UpdateUserDto";
import UpdateUserRequest from "../requests/UpdateUserRequest";
import {validateSync} from "class-validator";
import StatusCodes from "../common/status.codes";
import ErrorHandling from "../common/error.handling";
import SearchUserRequest from "../requests/SearchUserRequest";
import SearchUserDto from "../dto/SearchUserDto";
import {UserEntity} from "../entity/user.entity";
import UserDto from "../dto/UserDto";
import PageableDto from "../dto/PageableDto";

class UserMapper {
  constructor() {}

  toFindAllUserDto(usersEntity: UserEntity[], totalCount: number): PageableDto<UserDto> {
    const users = usersEntity.map((user: UserEntity) => this.toUserDto(user));
    const pageableUsers = new PageableDto<UserDto>();
    pageableUsers.list = users;
    pageableUsers.totalCount = totalCount;
    return pageableUsers;
  }

  toUserDto(userEntity: UserEntity): UserDto {
    const userDto = new UserDto();
    userDto.id = userEntity.id;
    userDto.firstName = userEntity.firstName;
    userDto.lastName = userEntity.lastName;
    userDto.email = userEntity.email;
    return userDto;
  }

  toSearchUserRequest(searchUsersDto: SearchUserDto): SearchUserRequest {
    const searchUserRequest = new SearchUserRequest();
    searchUserRequest.setPagination(searchUsersDto.pageRequest);
    searchUserRequest.setSort(searchUsersDto.sortRequest);
    return searchUserRequest;
  }

  toCreateUserRequest(createUserDto: CreateUserDto): CreateUserRequest {
    const user = new CreateUserRequest();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    const errors = validateSync(user);
    if (errors.length) {
      throw new ErrorHandling(StatusCodes.BAD_REQUEST, "Bad Request", errors);
    }
    return user;
  }

  toUpdateUserRequest(updateUserDto: UpdateUserDto): UpdateUserRequest {
    const user = new UpdateUserRequest();
    user.age = updateUserDto.age;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    const errors = validateSync(user);
    if (errors.length) {
      throw new ErrorHandling(StatusCodes.BAD_REQUEST, "Bad Request", errors);
    }
    return user;
  }
}


export default UserMapper;