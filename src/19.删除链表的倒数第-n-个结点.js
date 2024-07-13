/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  let step = 0;
  while (fast.next) {
    fast = fast.next;
    if (step < n) {
      step++;
    } else {
      slow = slow.next;
    }
  }

  if (step < n) {
    return head.next;
  }
  slow.next = slow.next.next;

  return head;
};
// @lc code=end

function generateSinglyLinkedList(arr) {
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

  return generateLinkedList(arr);
}
