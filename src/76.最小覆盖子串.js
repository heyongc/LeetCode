/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s?.length === 0 || t?.length === 0) return "";

  let hs = {};
  let ht = {};

  let result = "";

  for (const c of t) {
    ht[c] = ht[c] ? ht[c] + 1 : 1;
  }

  for (let i = 0, j = 0, cnt = 0; i < s.length; i++) {
    let si = s[i];
    hs[si] = hs[si] ? hs[si] + 1 : 1;

    if (hs[si] <= ht[si]) cnt++;

    // 缩小窗口
    while ((!ht[s[j]] && j < s.length) || hs[s[j]] > ht[s[j]]) {
      hs[s[j]]--;
      j++;
    }

    if (cnt === t.length) {
      if (!result || result.length > i - j + 1) {
        result = s.substring(j, i + 1);
      }
    }
  }

  return result;
};
// @lc code=end
