import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PetDto } from 'src/pets/dto/pet-dto';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty({ type: [PetDto] })
  @Type(() => PetDto)
  pets: PetDto[];
}
