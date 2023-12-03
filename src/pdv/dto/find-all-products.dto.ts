import { ApiProperty } from '@nestjs/swagger';

export class FindAllProductsDto {
  @ApiProperty()
  take: number;

  @ApiProperty()
  skip: number;
}
