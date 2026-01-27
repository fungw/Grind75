
var Trie = function() {
    this.isEnd = false;
    this.children = {};
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this;
    for (const char of word) {
        if (!current.children[char]) {
            current.children[char] = new Trie();
        }
        current = current.children[char];
    }
    current.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this;
    for (let i=0; i<word.length; i++) {
        if (!current.children[word[i]]) {
            return false;
        }
        current = current.children[word[i]];
    }
    return current.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this;
    for (const char of prefix) {
        if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }  
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */