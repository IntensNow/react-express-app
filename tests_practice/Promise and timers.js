function initial(salt) {
   return 1;
}

export default function sum(a, b) {
   return new Promise((resolve, reject) => {
      setTimeout(function(){
          resolve({
             value: initial(1) + a + b,
             param1: a,
             param2: b,
          });
      }, 100);
   });
}