/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function build(preStart, inStart, inEnd) {
    if (inStart > inEnd) return null;

    const rootVal = preorder[preStart]; // 前序遍历第一个节点是根节点
    const root = new TreeNode(rootVal);

    // 在中序遍历中找到根节点的位置
    const index = inorder.indexof(rootVal, inStart);

    //
    root.left = build(preStart + 1, inStart, index - 1);
    root.right = build(preStart + index - inStart + 1, index + 1, inEnd);
    return root;
  }

  return build(0, 0, inorder.length - 1);
};
// @lc code=end
