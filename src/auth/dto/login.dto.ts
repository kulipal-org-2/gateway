import { IsEmail, IsString } from 'class-validator';
import { LoginResponse, LoginType, ApiResponse } from 'kulipal-shared';

export class LoginDto implements LoginType {
  @IsEmail() @IsString() email: string;
  @IsString() password: string;
}

export class RefreshTokenDto {
  @IsString() refreshToken: string;
  @IsString() accessToken: string;
}

export type LoginApiResponse = LoginResponse & ApiResponse;

export class LoginResponseDto implements LoginApiResponse {
  message: string;
  credentials: { accessToken: string; refreshToken: string; userId: string };
  statusCode: number;
  success: boolean;
  error?: string;
}
