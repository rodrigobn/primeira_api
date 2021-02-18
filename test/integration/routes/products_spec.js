/**
 * O describe é uma global do Mocha usada para descrever suítes de testes que contém um ou mais 
 * casos de testes e/ou contém outras suítes de testes.
 */
describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    }

    /**
     * primeira suíte de testes
     */
    describe('GET /products', () => {
        //it = descrever um caso de teste.
        it('should return a list of products', done => { //done = informar ao Mocha quando o teste finalizou

            request
                .get('/products')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(defaultProduct);
                    done(err);
                })
        })
    })
})