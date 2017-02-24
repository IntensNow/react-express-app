import sum from './Promise and timers';

const fcForTest = (callback) => {
    setInterval(callback, 1000);
};

describe('function tests', () => {
    //перед каждым тестом начинаем использовать 
    //имитацию таймеров.
   beforeAll(() => {
      jest.useFakeTimers();
   });
    //после каждого теста начинаем использовать
    //реальные таймеры.
   afterAll(() => {
      jest.useRealTimers();
   });

   test('should return 4 for arguments 1 and 2', () => {
      const initial = jest.fn((cb) => 1);
      const result = sum(1, 2);

      result.then((result) => {
         expect(result).toEqual({
            value: 1,
            param1: 1,
            param2: 2,
         });

         expect(initial).toHaveBeCalledWith(1);
          
      });
       //отматать время на 100.
      jest.runAllTimers();
        //возвращаем промис для того чтобы jest знал что это ассинхронный код.
      return result;
   })
   test('interval tests', () => {
       const callback = jest.fn( cb => console.log('Хей, круто же') );
       
       fcForTest(callback);
       
       // callback внутри функции еще не вызван.
       expect(callback).not.toBeCalled();
       
       jest.runTimersToTime(1000);
       
       //После перемотки времени, каллбек вызван один раз.
       expect(callback.mock.calls.length).toBe(1);
       
       jest.runTimersToTime(1000);
       
       //после перемотки времени каллбек вызван дважды.
       expect(callback.mock.calls.length).toBe(2);
       
       jest.runTimersToTime(1000);
       
   })
});