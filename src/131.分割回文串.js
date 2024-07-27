/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (!s) return [];
  if (s.length === 1) return [[s]];

  var isPalindrome = function (s, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] != s[j]) {
        return false;
      }
    }
    return true;
  };

  let result = [];
  let path = [];
  const backtrack = function (s, startIndex) {
    //  终止条件

    if (startIndex === s.length) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;

      path.push(s.substring(startIndex, i + 1));
      backtrack(s, i + 1);
      path.pop();
    }
  };

  backtrack(s, 0);

  return result;
};
// @lc code=end
