
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.minValue = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0) {
        this.minStack.push(val);
        this.minValue = val;
    } else if (val < this.minValue) {
        this.minStack.push(val);
        this.minValue = val;
    } else {
        this.minStack.push(this.minValue);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    this.minValue = this.minStack[this.minStack.length - 1] ?? Infinity;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2