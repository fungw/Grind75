/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest;
    let profit = 0;
    for (const price of prices) {
        if (lowest === undefined || price < lowest) {
            lowest = price;
            continue;
        }

        const tempProfit = price - lowest;
        if (tempProfit > profit) {
            profit = tempProfit;
        }
    }

    return profit;
};

// iterate through the prices array, taking note of the lowest
// if new lowest found, reset
// at each iteration, record the diff, to find out the next highest

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
