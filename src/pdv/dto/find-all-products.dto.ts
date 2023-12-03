import { ApiProperty } from '@nestjs/swagger';

export class FindAllProductsDto {
  @ApiProperty()
  search?: string;

  @ApiProperty()
  take?: number;

  @ApiProperty()
  skip?: number;
}
