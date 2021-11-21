import {IsInt, IsNotEmpty, Length, Max, Min} from "class-validator";

class UpdateUserDto {
  @IsNotEmpty()
  @Length(1, 40)
  firstName: string;

  @IsNotEmpty()
  @Length(1, 40)
  lastName: string;

  @IsNotEmpty()
  @IsInt()
  @Min(10)
  @Max(99)
  age: number;
}

export default UpdateUserDto;