const Artist = require('../../model/Artist');
const getAction = require('../../actions/getArtist')
const mockedGet = require('../mocks/get.test.json');

describe('GET /artist/id', () => {
    describe('when request is sucessfully', () => {
        it('should return a artist', async () => {
            const req = { params: { id: "640373e97ecfecb5a00b90dd" } }
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.findById = jest.fn().mockResolvedValue(mockedGet);

            await getAction(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith({data: mockedGet});    
        });        
    });
    describe('when there is no artist found', () => {
        it('should throw error 404', async () => {
            const req = { params: { id: "640373e97ecfecb5a00b90dd" } }
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.findById = jest.fn().mockResolvedValue(null);

            await getAction(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith({data: "not found"});    
        });        
    });
    describe('when request failed', () => {
        it('should throw error 500', async () => {
            const req = { params: { id: "640373e97ecfecb5a00b90dd" } }
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            Artist.findById = jest.fn().mockRejectedValue();

            await getAction(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({data: "something went wrong"});    
        });        
    });
});
