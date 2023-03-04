const Artist = require('../../model/Artist');
const listAction = require('../../actions/list')
const mockedList = require('../mocks/list.test.json');

describe('GET /artists', () => {
    describe('when request is sucessfully', () => {
        it('should return a list of artists', async () => {
            const req = {};
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.find = jest.fn().mockResolvedValue(mockedList);

            await listAction(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
        });
    });
});