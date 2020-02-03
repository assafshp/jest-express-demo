import rp from 'request-promise';
import {server} from './index';

describe('Testing my new API', () => {

    beforeAll(() => {
        console.log('before all');
    });

    afterAll(() => {
        console.log('after all');
        server.close();
    });

    it('should test get', async () => {

        const response = await rp("http://localhost:3003",{method: 'GET', json: true});
        expect(response.firstName).toEqual('Assaf');

    });
    
});