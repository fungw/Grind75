/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = new Map();
    magazine.split('').forEach((char) => map.set(char, (map.get(char) ?? 0) + 1));

    for (let i=0; i<ransomNote.length; i++) {
        const char = ransomNote[i];
        const magMatch = map.get(char);
        if (magMatch === undefined || magMatch <= 0) {
            return false;
        }

        map.set(char, magMatch - 1);
    }

    return true;
};

// create a map of occurences from magazine
// loop through ransomNote and see if all letters within maps to something in magazine