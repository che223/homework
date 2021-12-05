/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//将两个链表进行合并
function merge2Lists(list1, list2){
    const front = new ListNode()
    let now = front
    while(list1 && list2){
        if(list1.val <= list2.val){
            now.next = list1
            now = now.next
            list1 = list1.next
        } else {
            now.next = list2
            now = now.next
            list2 = list2.next
            }
        }
        if(list1){
            now.next = list1
        }
        if(list2){
            now.next = list2
        }
        return front.next
    }
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//分治方法
var mergeKLists = function(lists) {
    lists = lists.filter(el => el)
    if(lists.length === 0){
        return null
    }
    function mergeLists(start, end){
        if(start === end ) {
            return lists[start]
        }
        const mid = start + Math.floor((end - start) / 2) 
        const left = mergeLists(start, mid)
        const right = mergeLists(mid + 1, end)
        return merge2Lists(left, right)
    }
    return mergeLists(0, lists.length - 1)
};
// @lc code=end

