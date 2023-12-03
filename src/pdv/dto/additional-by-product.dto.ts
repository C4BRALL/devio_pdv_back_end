import { ApiProperty } from '@nestjs/swagger';

export class FindAdditionalByProductsDto {
  @ApiProperty({
    example: '2463ced5-1f7d-45f7-943a-82f0cf630803',
    description: 'Id of the product',
  })
  id: string;
}
