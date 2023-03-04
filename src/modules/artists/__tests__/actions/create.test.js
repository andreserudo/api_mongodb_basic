const Artist = require('../../model/Artist');
const createAction = require('../../actions/create')
const mockedCreate = require('../mocks/create.test.json');

describe('POST /artist', () => {
    describe('when request is sucessfully', () => {
        it('should create a artist', async () => {
            const req = { body: mockedCreate }
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.create = jest.fn().mockResolvedValue();

            await createAction(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.send).toHaveBeenCalledWith();    
        });        
    });
    describe('when request failed', () => {
        it('should throw error 500', async () => {
            const req = { body: mockedCreate }
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.create = jest.fn().mockRejectedValue();

            await createAction(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({message: "something went wrong"});    
        });        
    });
});