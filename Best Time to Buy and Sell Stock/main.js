/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const profits = [];
  let buyPointer = 0;
  let sellPointer = 1;
  while (sellPointer < prices.length) {
    if (prices[buyPointer] < prices[sellPointer]) {
      profits.push(prices[sellPointer] - prices[buyPointer]);
      sellPointer++;
    } else if (prices[sellPointer] <= prices[buyPointer]) {
      buyPointer = sellPointer;
      sellPointer++;
    } else {
      sellPointer++;
      buyPointer++;
    }
  }

  return profits.length > 0 ? Math.max(...profits) : 0;
};

test_case1 = [7,1,5,3,6,4];
test_case2 = [7,6,4,3,1];
test_case3 = [2,4,1];
test_case4 = [2,1,2,1,0,1,2];
test_case5 = [1,2,4,2,5,7,2,4,9,0,9];
test_case6 = [1,2,1,2,1,3,5,1];

console.log(maxProfit(test_case1));
console.log(maxProfit(test_case2));
console.log(maxProfit(test_case3));
console.log(maxProfit(test_case4));
console.log(maxProfit(test_case5));
console.log(maxProfit(test_case6));

// Attempt 1
// var maxProfit = function(prices) {
//   let buy = undefined;
//   let sell = undefined;
//   prices.forEach(price => {
//     if (sell === undefined && (buy === undefined || price < buy)) {
//       buy = price;
//       sell = undefined;
//     } else if (buy !== undefined && (sell === undefined || price > sell)) {
//       sell = price;
//     }
//   });

//   return sell === undefined ? 0 : sell - buy;
// };