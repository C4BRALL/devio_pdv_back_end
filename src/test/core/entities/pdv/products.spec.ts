import { v4 as uuidv4 } from 'uuid';
import { Products } from '../../../../core/entities/pdv/product';

describe('Products', () => {
  it('should create a product with correct values', () => {
    const product = new Products();
    product.name = 'Test Product';
    product.description = 'This is a test product';
    product.created_at = new Date();
    product.updated_at = new Date();
    product.id = uuidv4();
    product.image = 'test.jpg';
    product.currency = 'USD';
    product.price = 100;

    expect(product.name).toEqual('Test Product');
    expect(product.description).toEqual('This is a test product');
    expect(product.created_at).toBeTruthy();
    expect(product.updated_at).toBeTruthy();
    expect(product.id).toBeTruthy();
    expect(product.image).toEqual('test.jpg');
    expect(product.currency).toEqual('USD');
    expect(product.price).toEqual(100);
  });
});
