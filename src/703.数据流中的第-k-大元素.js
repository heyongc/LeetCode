/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
// 排序法
// var KthLargest = function (k, nums) {
//   this.k = k;
//   this.nums = nums;
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   this.nums.push(val);
//   this.nums.sort((a, b) => b - a);
//   return this.nums[this.k - 1];
// };

// 最小堆法
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }
      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      index = smallest;
    }
  }
}

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinHeap();
  nums.forEach((num) => {
    this.minHeap.insert(num);
  });

  while (this.minHeap.heap.length > k) {
    this.minHeap.extractMin();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minHeap.heap.length < this.k) {
    this.minHeap.insert(val);
  } else if (val > this.minHeap.heap[0]) {
    this.minHeap.insert(val);
    this.minHeap.extractMin();
  }
  return this.minHeap.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

// let kkk = new KthLargest(1, []);
// console.log(kkk.add(-3));
// console.log(kkk.add(-2));
// console.log(kkk.add(-4));
// console.log(kkk.add(0));
// console.log(kkk.add(4));
