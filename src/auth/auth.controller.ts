import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto, LoginResponseDto, RefreshTokenDto } from './dto/login.dto';
import { RegisterDto, RegisterResponseDto } from './dto/register.dto';
import {
  ChangePasswordDto,
  ChangePasswordResponseDto,
  ForgotPasswordDto,
  ForgotPasswordResponseDto,
  ResetPasswordDto,
  ResetPasswordResponseDto,
  ValidateTokenDto,
  ValidateTokenResponseDto,
} from './dto/password.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @ApiOperation({ summary: 'Login user with email and password credentials' })
  @Post('login')
  async login(@Body() _: LoginDto): Promise<LoginResponseDto> {
    return {
      message: 'Login was successful',
      credentials: {
        accessToken: 'dummyAccessToken',
        refreshToken: 'dummyRefreshToken',
        userId: 'dummyUserId',
      },
      statusCode: HttpStatus.OK,
      success: true,
    };
  }

  @ApiOperation({ summary: 'Refresh access token' })
  @Post('refresh-token')
  async refreshToken(@Body() _: RefreshTokenDto): Promise<LoginResponseDto> {
    return {
      message: 'Token refreshed successfully',
      credentials: {
        accessToken: 'dummyAccessToken',
        refreshToken: 'dummyRefreshToken',
        userId: 'dummyUserId',
      },
      statusCode: HttpStatus.OK,
      success: true,
    };
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  async register(@Body() _: RegisterDto): Promise<RegisterResponseDto> {
    return {
      message: 'User registration successful',
      statusCode: HttpStatus.CREATED,
      success: true,
    };
  }

  @Post('password/forgot')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Initiate password reset process' })
  @ApiOkResponse({
    description:
      'If an account with that email exists, you will receive instructions to reset your password.',
    type: ForgotPasswordResponseDto,
  })
  async forgotPassword(
    @Body() _: ForgotPasswordDto,
  ): Promise<ForgotPasswordResponseDto> {
    return {
      message:
        'If an account with that email exists, you will receive instructions to reset your password.',
      statusCode: HttpStatus.OK,
      success: true,
    };
  }

  @Post('password/validate-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate password reset token' })
  @ApiOkResponse({
    description: 'Password reset token is valid',
    type: ValidateTokenResponseDto,
  })
  async validateToken(
    @Body() _: ValidateTokenDto,
  ): Promise<ValidateTokenResponseDto> {
    return {
      message: 'Password reset token is valid',
      statusCode: HttpStatus.OK,
      success: true,
      isValid: true,
    };
  }

  @Post('password/reset')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset user password' })
  @ApiOkResponse({
    description: 'Password has been reset successfully',
    type: ResetPasswordResponseDto,
  })
  async resetPassword(
    @Body() _: ResetPasswordDto,
  ): Promise<ResetPasswordResponseDto> {
    return {
      message: 'Password has been reset successfully',
      statusCode: HttpStatus.OK,
      success: true,
    };
  }

  @Post('password/change')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Change user password' })
  @ApiOkResponse({
    description: 'Password has been changed successfully',
    type: ChangePasswordResponseDto,
  })
  async changePassword(
    @Body() _: ChangePasswordDto,
  ): Promise<ChangePasswordResponseDto> {
    return {
      message: 'Password has been changed successfully',
      statusCode: HttpStatus.OK,
      success: true,
    };
  }
}
