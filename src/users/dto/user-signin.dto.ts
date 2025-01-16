import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserSignInDto {
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Enter valid email' })
  email: string;

  @IsNotEmpty({ message: 'password cannot be empty' })
  @MinLength(5, { message: 'Minimum characters should be 5' })
  password: string;
}
