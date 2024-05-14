const { getResult } = require('./index');


describe('return undefined if mode is not defined', () => {
    it('should return undefined', () => {
        expect(getResult()).toBe(undefined);
    });
});