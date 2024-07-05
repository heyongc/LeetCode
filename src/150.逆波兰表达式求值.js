/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // if(tokens.lengt)
  let stack = [];
  let n1, n2;
  for (const item of tokens) {
    if (item === "+") {
      n2 = +stack.pop();
      n1 = +stack.pop();
      stack.push(n1 + n2);
    } else if (item === "-") {
      n2 = +stack.pop();
      n1 = +stack.pop();
      stack.push(n1 - n2);
    } else if (item === "*") {
      n2 = +stack.pop();
      n1 = +stack.pop();
      stack.push(n1 * n2);
    } else if (item === "/") {
      n2 = +stack.pop();
      n1 = +stack.pop();
      stack.push(Math.trunc(n1 / n2));
    } else {
      stack.push(+item);
    }
  }

  return stack[0];
};
// @lc code=end
