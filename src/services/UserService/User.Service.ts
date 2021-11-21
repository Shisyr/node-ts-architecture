import {getRepository, Repository} from "typeorm";
import {UserEntity} from "../../entity/user.entity";
import CreateUserDto from "../../dto/CreateUserDto";
import UserMapper from "../../mappers/UserMapper";
import UpdateUserDto from "../../dto/UpdateUserDto";
import ErrorHandling from "../../common/error.handling";
import StatusCodes from "../../common/status.codes";
import SearchUserDto from "../../dto/SearchUserDto";
import UserDto from "../../dto/UserDto";
import PageableDto from "../../dto/PageableDto";
import CommonMapper from "../../mappers/CommonMapper";
import MailerService from "../MailerService";


class UserService {
  private userRepository: Repository<UserEntity>;
  private userMapper: UserMapper;
  private mailerService: MailerService;

  constructor() {
    this.userRepository = getRepository<UserEntity>(UserEntity);
    this.mailerService = MailerService.getMailerService();
    this.userMapper = new UserMapper();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const createUserRequest = this.userMapper.toCreateUserRequest(createUserDto);
    const createdUser = UserEntity.create(createUserRequest);
    const savedUser = await UserEntity.save(createdUser)
    await this.mailerService.sendMail({
      to: 'somebody@mail.com',
      subject: 'Subject',
      text: 'It is my text',
      html: '<p style="color: red">Hello World</p>'
    })
    return savedUser;
  }

  async updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const createUserRequest = this.userMapper.toUpdateUserRequest(updateUserDto);
    let foundUserById = await UserEntity.findOne(userId);
    if (!foundUserById) {
      throw new ErrorHandling(StatusCodes.NOT_FOUND,'The user is not found!');
    }
    foundUserById.age = createUserRequest.age || foundUserById.age;
    foundUserById.firstName = createUserRequest.firstName || foundUserById.firstName;
    foundUserById.lastName = createUserRequest.lastName || foundUserById.lastName;
    return foundUserById.save();
  }

  async getUsers(searchUsersDto: SearchUserDto): Promise<PageableDto<UserDto>> {
    const searchUserRequest = this.userMapper.toSearchUserRequest(searchUsersDto);
    const [listUsers, totalCount] = await this.userRepository.findAndCount(searchUserRequest);
    return CommonMapper.toFindAll<UserDto>(
      listUsers.map((user: UserEntity) => this.userMapper.toUserDto(user)),
      totalCount
    )
  }
}

export default UserService;