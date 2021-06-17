import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwt: JwtService,
  ) {}

  async login(id: number, password: string): Promise<string> {
    const user = await this.users.findOne(id);

    if (user && (await user.comparePassword(password))) {
      return this.jwt.signAsync(
        { firstName: user.firstName, lastName: user.lastName },
        { subject: `${user.id}` },
      );
    }

    throw new UnauthorizedException();
  }
}
