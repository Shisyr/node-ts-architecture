import {IsEmail, IsInt, IsNotEmpty, Length, Max, Min} from "class-validator";

class CreateUserRequest {
  @IsNotEmpty()
  @Length(1, 40)
  firstName: string;

  @IsNotEmpty()
  @Length(1, 40)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  @Min(10)
  @Max(99)
  age: number;
}

export default CreateUserRequest;
