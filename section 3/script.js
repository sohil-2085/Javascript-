// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];


const printForecast = function (arr) {
  let ans = '';
  for (let i = 0; i < arr.length; i++) {
    ans = ans + `${arr[i]}°C in ${i + 1} days ... `;
  }
  return ans;
};

console.log(printForecast(test1));

