import { ApiProperty } from '@nestjs/swagger';

export class Products {
  @ApiProperty()
  'name': string;

  @ApiProperty()
  'description': string;

  @ApiProperty()
  'created_at': Date;

  @ApiProperty()
  'updated_at': Date;

  @ApiProperty()
  'category_id': string;

  @ApiProperty()
  'id': string;

  @ApiProperty()
  'image': string;

  @ApiProperty()
  'currency': string;

  @ApiProperty()
  'price': number;
}
