import { ApiProperty } from '@nestjs/swagger';

export class FindAllProductsByCategoryDto {
  @ApiProperty({
    example: '2463ced5-1f7d-45f7-943a-82f0cf630803',
    description: 'Id of the category',
  })
  id: string;

  @ApiProperty({
    example: 10,
    description: 'quantity of products to be brought from the base',
  })
  take?: number;

  @ApiProperty({
    example: 10,
    description:
      'number of products to be skipped, thus bringing the next page of products',
  })
  skip?: number;
}
