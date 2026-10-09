/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
     let open = 0;
    let insertions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            // Check whether we have a pair of closing brackets
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;
            } else {
                // Insert a missing ')'
                insertions++;
            }

            // Match this pair with an opening bracket
            if (open > 0) {
                open--;
            } else {
                // Insert a missing '('
                insertions++;
            }
        }
    }

    // Each unmatched '(' needs two ')'
    return insertions + open * 2;
};