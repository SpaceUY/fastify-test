import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: UserDto,
  },
  dto: {
    create: CreateUserDto,
    update: UpdateUserDto,
    replace: CreateUserDto,
  },
  routes: {
    only: ['getOneBase', 'createOneBase', 'updateOneBase', 'deleteOneBase'],
  },
  query: {
    exclude: ['password'],
    join: {
      pets: {},
    },
  },
})
@ApiTags('users')
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
