/**
* @param {number[]} coins
* @param {number} amount
* @return {number}
*/
var coinChange = function(coins, amount) {
    const result = new Array(amount + 1).fill(Infinity);
    result[0] = 0;

    coins.sort((a, b) => a - b);

    for (const pointer in result) {
        for (const coin of coins) {
            if (pointer - coin < 0) break;
            result[pointer] = Math.min(result[pointer], result[pointer - coin] + 1);
        }
    }

    return result[amount] < Infinity ? result[amount] : -1;
};

const test_case1_coins = [1,2,5];
const test_case1_amount = 11;
const test_case2_coins = [2];
const test_case2_amount = 3;
const test_case3_coins = [1];
const test_case3_amount = 0;
const test_case4_coins = [2,5,10,1];
const test_case4_amount = 27;
const test_case5_coins = [186,419,83,408];
const test_case5_amount = 6249;

console.log(coinChange(test_case1_coins, test_case1_amount));
console.log(coinChange(test_case2_coins, test_case2_amount));
console.log(coinChange(test_case3_coins, test_case3_amount));
console.log(coinChange(test_case4_coins, test_case4_amount));
console.log(coinChange(test_case5_coins, test_case5_amount));