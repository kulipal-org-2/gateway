import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ApiResponse, MessageResponse } from 'kulipal-shared';

export class ForgotPasswordDto {
  @IsEmail() @IsString() email: string;
}

export type ForgotPasswordApiResponse = MessageResponse & ApiResponse;

export class ForgotPasswordResponseDto implements ForgotPasswordApiResponse {
  message: string;
  statusCode: number;
  success: boolean;
}

export class ValidateTokenDto {
  @IsString() token: string;
  @IsEmail() @IsString() email: string;
}

export type ValidateTokenResponse = {
  isValid: boolean;
};

export type ValidateTokenApiResponse = ValidateTokenResponse &
  MessageResponse &
  ApiResponse;

export class ValidateTokenResponseDto implements ValidateTokenApiResponse {
  message: string;
  statusCode: number;
  success: boolean;
  isValid: true;
}

export class ResetPasswordDto {
  @IsString() token: string;
  @IsEmail() @IsString() email: string;
  @IsString() newPassword: string;
}

export type ResetPasswordApiResponse = MessageResponse & ApiResponse;

export class ResetPasswordResponseDto implements ResetPasswordApiResponse {
  message: string;
  statusCode: number;
  success: boolean;
}
