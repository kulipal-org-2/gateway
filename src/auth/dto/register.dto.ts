import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ApiResponse, CreateUserType, MessageResponse } from 'kulipal-shared';

export class RegisterDto implements CreateUserType {
  @IsEmail() @IsString() email: string;
  @IsString() password: string;
  @IsString() firstName: string;
  @IsString() lastName: string;
  @IsBoolean() agreeToTerms: boolean;
  @IsString() @IsPhoneNumber() @IsOptional() phoneNumber?: string;
  @IsString() @IsOptional() source?: string;
}

export type RegisterApiResponse = MessageResponse & ApiResponse;

export class RegisterResponseDto implements RegisterApiResponse {
  message: string;
  statusCode: number;
  success: boolean;
}
