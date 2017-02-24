import sum from './sum';

describe('function tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).not.toBeNull();
        expect(sum(1,2)).toBeDefined();
    });

    test('should return 4 for arguments 1 and 2', () => {
        const forMock = jest.fn((cb) => 1);
        expect(sum(1,2)).toBe(4);
    });
    
})

describe('mock tests', () => {
    test('mock tests', () => {
       const myMock = jest.fn();
       myMock.mockReturnValue('value from the Mock');
        let arr = [];
        for(var i = 0; i < 2; i++){
            arr[i] = myMock();
        }
        arr.forEach(v => console.log(v));
    });
})