// 题目描述：

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 提示：
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] 仅包含小写字母

// 时间复杂度：O(n*k)
var groupAnagrams = function (strs) {
  let map = new Map();
  let aUnicode = "a".charCodeAt();

  for (const s of strs) {
    let hashKey = new Array(26).fill(0);
    for (const c of s) {
      hashKey[c.charCodeAt() - aUnicode] += 1;
    }

    hashKey = hashKey.join();

    if (map.has(hashKey)) {
      map.get(hashKey).push(s);
    } else {
      map.set(hashKey, [s]);
    }
  }

  return Array.from(map.values());
};

let res = groupAnagrams([
  "bddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "bbbbbbbbbbc",
  "hhh",
  "ab",
  "ba",
]);
console.log("【res】", res);

// var groupAnagrams = function (strs) {
//   let map = new Map();
//   for (const s of strs) {
//     let hashKey = ssplit("").sort().join("");

//     if (map.has(hashKey)) {
//       map.get(hashKey).push(s);
//     } else {
//       map.set(hashKey, [s]);
//     }
//   }

//   return Array.from(map.values());
// };
