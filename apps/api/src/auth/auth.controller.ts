import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.gurad';
import type { CreateLocalUserRequest } from 'src/users/dto/create-user-request';
import { createLocalUserRequestSchema } from 'src/users/dto/create-user-request';
import { ZodValidationPipe } from 'comon/pipes/zodValidationPipe';
import { GResponse } from 'comon/classes/GResponse';
import { GithubAuthGuard } from './github-auth.gurad';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/local/login')
  async local_login() {}

  @Post('/local/signup')
  @UsePipes(new ZodValidationPipe(createLocalUserRequestSchema))
  async local_signup(@Body() body: CreateLocalUserRequest) {
    const newUser = await this.authService.signupLocal(body);
    return new GResponse({
      status: 201,
      message: 'New user created successfully',
      data: newUser,
    });
  }

  @UseGuards(GithubAuthGuard)
  @Get('/github/login')
  async github_login() {}

  @UseGuards(GithubAuthGuard)
  @Get('/github/cb')
  async github_cb() {}
}
