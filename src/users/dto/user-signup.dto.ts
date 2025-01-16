import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UserSignInDto } from "./user-signin.dto";

export class UserSignUpDto extends UserSignInDto{
    @IsNotEmpty({message:"Name can not be null!!"})
    @IsString({message: "Please provide valid name"})
    name: string;

}