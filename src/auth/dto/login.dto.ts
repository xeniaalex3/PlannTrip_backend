import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'E-mail invalide' })
  @IsNotEmpty({ message: 'E-mail est obligatoire' })
  email: string;

  @IsString({ message: 'Mot de passe doit être une chaîne' })
  @IsNotEmpty({ message: 'Mot de passe est obligatoire' })
  password: string;
}
