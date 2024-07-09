/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 关键在于找到股票价格的最低点和后续出现的高点，它们的差就是最大的利润。
// 我们可以通过维护两个变量 minPrice 和 maxProfit，并遍历一次数组解决。

// 1、初始化变量 minPrice、maxProfit，记录最小价格和最大利润
// 2、遍历数组元素，比较当前价格和minPrice的大小，取两者中小值作为minPrice的值
// 3、计算当前价格与minPrice的差值，并与maxPrice比较大小，取两者中大值作为maxPrice的值
// 4、返回maxPrice

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
// @lc code=end
