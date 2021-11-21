/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
 class Node {
    constructor(val){
        this.val = val
        this.prev = null
        this.next = null
    }
}
var MyCircularDeque = function(k) {
    this.capacity = k
    this.nowCapcity = 0
    this.front = new Node(0)
    this.tail = new Node(0)
    this.front.next = this.tail
    this.tail.prev = this.front
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false
    const n = new Node(value)
    const next = this.front.next
    this.front.next = n
    n.prev = this.front
    n.next = next
    next.prev = n
    this.nowCapcity ++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false
    const n = new Node(value)
    const prev = this.tail.prev
    this.tail.prev = n
    n.next = this.tail
    n.prev = prev
    prev.next = n
    this.nowCapcity ++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false
    let deleteValue = this.front.next
    this.front.next = deleteValue.next
    deleteValue.next.prev = this.front
    deleteValue = null
    this.nowCapcity --
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false
    let deleteValue = this.tail.prev
    this.tail.prev = deleteValue.prev
    deleteValue.prev.next = this.tail
    deleteValue = null
    this.nowCapcity --
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1
    return this.front.next.val
 };

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1
    return this.tail.prev.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.tail.prev === this.front
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.nowCapcity === this.capacity
};
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

