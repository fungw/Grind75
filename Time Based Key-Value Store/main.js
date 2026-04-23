
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const mappedElement = this.map.get(key);

    if (!mappedElement) {
        this.map.set(key, [ {value, timestamp} ]);
    } else {
        mappedElement.push({value, timestamp});
        this.map.set(key, mappedElement);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const mappedElement = this.map.get(key);
    if (!mappedElement) return "";
    
    function binarySearch(low, high, bestMid) {
        const mid = Math.floor((low + high) / 2);

        if (low > high) return bestMid === -1 ? "" : mappedElement[bestMid].value;

        if (timestamp >= mappedElement[mid].timestamp) {
            bestMid = mid;
            return binarySearch(mid + 1, high, bestMid);
        } else {
            return binarySearch(low, mid - 1, bestMid);
        }
    }

    return binarySearch(0, mappedElement.length - 1, -1);
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */