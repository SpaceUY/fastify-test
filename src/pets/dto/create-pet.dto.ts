import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty()
  displayName: string;
}
