/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
};
// @lc code=end

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function generateLinkedList(arr) {
  let head;
  let len = arr.length - 1;
  for (let i = len; i >= 0; i--) {
    if (i === len) {
      head = new ListNode(arr[i]);
    } else {
      head = new ListNode(arr[i], head);
    }
  }

  return head;
}

// let linkNode = generateLinkedList([1, 2, 3, 4, 5]);
// // console.log(linkNode);
// reverseList(linkNode);
