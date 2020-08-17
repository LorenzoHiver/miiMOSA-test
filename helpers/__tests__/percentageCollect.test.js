import { percentageCollected } from '../percantageCollect.helper';

describe('percentage function', () => {
    it('sould give a percantage', () => {
        const current = 1;
        const target = 10;
        expect(percentageCollected(1,10)).toBe("10");
    })
})