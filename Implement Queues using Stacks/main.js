
    var MyQueue = function() {
        this.pushStack = [];
        this.pullStack = [];
    };

    /** 
    * @param {number} x
    * @return {void}
    */
    MyQueue.prototype.push = function(x) {
        this.pushStack.push(x);
    };

    /**
    * @return {number}
    */
    MyQueue.prototype.pop = function() {
        if (this.pullStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.pullStack.push(this.pushStack.pop());
            }
        }
        return this.pullStack.pop();
    };

    /**
    * @return {number}
    */
    MyQueue.prototype.peek = function() {
        if (this.pullStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.pullStack.push(this.pushStack.pop());
            }
        }

        return this.pullStack[this.pullStack.length - 1];
    };

    /**
    * @return {boolean}
    */
    MyQueue.prototype.empty = function() {
        return this.pushStack.length === 0 && this.pullStack.length === 0;
    };

    /** 
    * Your MyQueue object will be instantiated and called as such:
    * var obj = new MyQueue()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.peek()
    * var param_4 = obj.empty()
    */