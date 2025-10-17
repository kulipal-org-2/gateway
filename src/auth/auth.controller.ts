import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto, LoginResponseDto, RefreshTokenDto } from './dto/login.dto';
import { RegisterDto, RegisterResponseDto } from './dto/register.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @ApiOperation({ summary: 'Login user with email and password credentials' })
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
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
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
  ): Promise<LoginResponseDto> {
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
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<RegisterResponseDto> {
    return {
      message: 'User registration successful',
      statusCode: HttpStatus.CREATED,
      success: true,
    };
  }
}
