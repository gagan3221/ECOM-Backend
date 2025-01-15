import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUp{
    @IsNotEmpty({message:"Name can not be null!!"})
    @IsString({message: "Please provide valid name"})
    name: string;

    @IsNotEmpty({message:"Email cannot be empty"})
    @IsEmail({},{message:"Enter valid email"})
    email: string;

    @IsNotEmpty({message:"password cannot be empty"})
    @MinLength(5,{message:"Minimum characters should be 5"})
    password: string;
}