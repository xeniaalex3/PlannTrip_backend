import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(2)
  firstname: string;

  @IsString()
  @MinLength(2)
  lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(12, {
    message: 'Le mot de passe doit contenir au moins 12 caractères',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{12,}$/, {
    message:
      'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre',
  })
  password: string;
}
