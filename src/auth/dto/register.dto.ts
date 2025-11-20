import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Le prénom doit être une chaîne' })
  @IsNotEmpty({ message: 'Le prénom est obligatoire' })
  @MinLength(2, { message: 'Le prénom doit contenir au moins 2 caractères' })
  firstname: string;

  @IsString({ message: 'Le nom doit être une chaîne' })
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  lastname: string;

  @IsEmail({}, { message: 'E-mail invalide' })
  @IsNotEmpty({ message: 'E-mail est obligatoire' })
  email: string;

  @IsString({ message: 'Le mot de passe doit être une chaîne' })
  @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
  @MinLength(12, {
    message: 'Le mot de passe doit contenir au moins 12 caractères',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{12,}$/, {
    message:
      'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre',
  })
  password: string;
}
