import { UUID } from 'crypto';

export class Products {
  'name': string;

  'description': string;

  'created_at': Date;

  'updated_at': Date;

  'category_id': UUID;

  'id': UUID;

  'image': string;

  'currency': string;

  'price': number;
}
