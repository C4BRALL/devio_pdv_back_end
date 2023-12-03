import { ApiProperty } from '@nestjs/swagger';

export class FindAllCategoryDto {
  @ApiProperty()
  take?: number;

  @ApiProperty()
  skip?: number;
}
