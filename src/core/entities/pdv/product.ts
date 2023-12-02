import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

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
  'category_id': UUID;

  @ApiProperty()
  'id': UUID;

  @ApiProperty()
  'image': string;

  @ApiProperty()
  'currency': string;

  @ApiProperty()
  'price': number;
}
