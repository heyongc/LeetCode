/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 使用递归解决，由底向上计算子树的高度，判断是否平衡
1. 定义check方法，该方法判断树是否平衡，如果平衡返回树的高度，如果不平衡返回-1
2. check方法内部
  ● 递归首先定义出口，避免无限递归
  ● 求left、right树的高度(-1表示不平衡，返回-1)，高度差超过1表示不平衡返回-1
  ● 执行到最后表示子树都平衡，取子树高度的大值加1作为当前树的高度并返回
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return check(root) != -1;

  /**
   * @returns -1 or 树的高度
   */
  function check(root) {
    if (!root) return 0;

    var l = check(root.left);
    if (l === -1) return -1;

    var r = check(root.right);
    if (r === -1) return -1;

    if (Math.abs(l - r) > 1) return -1;

    return Math.max(l, r) + 1;
  }
};
// @lc code=end
