import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreatePetDto } from 'src/pets/dto/create-pet.dto';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ type: [CreatePetDto] })
  @ValidateNested({ each: true })
  @Type(() => CreatePetDto)
  pets: CreatePetDto[];
}
