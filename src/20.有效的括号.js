// 题目描述：

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 1. )[]{}
// 2. ([)]
// 3. ([])((

var isValid = function (s) {
  if (!s) return false;

  if (s.length % 2 !== 0) return false;

  let stack = [];

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const c of s) {
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("[()()]{{"));
