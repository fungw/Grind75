/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) return s.length;

    const resolvedString = s.split('');
    let pointerA = 0;
    let pointerB = pointerA + 1;
    const set = new Set();
    set.add(resolvedString[pointerA]);
    let counter = 1;
    let maxLen = 0;

    while (pointerB < resolvedString.length) {
        const aChar = resolvedString[pointerA];
        const bChar = resolvedString[pointerB];

        if (!set.has(bChar)) {
            counter++;
            set.add(bChar);
            pointerB++;
        } else {
            pointerA++;
            set.delete(aChar);
            counter--;
        }

        maxLen = Math.max(maxLen, counter);
    }

    return maxLen;
};

// sliding window solution
// keep expanding right until duplicate found
// if duplicate found, shrink left until no duplicates