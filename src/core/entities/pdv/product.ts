import { ApiProperty } from '@nestjs/swagger';

export class Products {
  @ApiProperty()
  'id': string;

  @ApiProperty()
  'name': string;

  @ApiProperty()
  'image': string;

  @ApiProperty()
  'description': string;

  @ApiProperty()
  'currency': string;

  @ApiProperty()
  'price': number;

  @ApiProperty()
  'category_id': string;

  @ApiProperty()
  'created_at': Date;

  @ApiProperty()
  'updated_at': Date;
}
