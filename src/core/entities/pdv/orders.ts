import { Additional } from './additional';

export class Orders {
  'id': string;

  'description': string;

  'product_id': string;

  'quantity': number;

  'additional_selected': Additional[];

  'status': 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';

  'paymentId': string;

  'created_at': Date;

  'updated_at': Date;
}
