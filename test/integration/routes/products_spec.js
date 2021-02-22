
const request = require('supertest');
const app = request('../src/app');
const req = request(app);

describe('Integration test exaple', function() {
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    }
    
    it('get /products', function(done) {
        req
        .get('/products')
        .end((err, res) => {
            expect(res.body[0]).to.eql(defaultProduct);
            done(err);
        })
    });
});