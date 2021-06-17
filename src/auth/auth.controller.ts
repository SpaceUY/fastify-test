import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'login as a user' })
  async login(@Body() { id, password }: AuthDto): Promise<string> {
    return this.auth.login(id, password);
  }
}
