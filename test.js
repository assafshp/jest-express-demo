import rp from 'request-promise';
import {server} from './index';

describe('Testing my new API', () => {

    beforeAll(() => {
        console.log('before all');
        // server.run();
    });

    afterAll(() => {
        console.log('after all');
        server.close(() => { console.log('Doh :('); });
    });

    it('should test get', async () => {

        const response = await rp("http://localhost:3003",{method: 'GET'});
        expect(response).toEqual('Hello World!');

    });
    
});