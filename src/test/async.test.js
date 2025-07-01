const fetchProduct = require('../async');

describe('Async Tests', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 1.5 });
    });
    done();
  });

  it('async - async', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 1.5 });
  });

  it('async - resolve', async () => {
    await expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 1.5 });
  });

  it('async - reject', async () => {
    await expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
