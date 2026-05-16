/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1, curr = 2;
    
    if (n === 1 || n === 2) return n;

    for (let i=3; i<=n; i++) {
        let next = curr + prev;
        prev = curr;
        curr = next;
    }

    return curr;
};
