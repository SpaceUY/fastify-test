import { ApiProperty } from '@nestjs/swagger';

export class PetDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  displayName: string;
}
