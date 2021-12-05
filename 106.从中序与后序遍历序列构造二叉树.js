/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    const inO = inorder
    const post = postorder
    function build(l1, r1, l2, r2){
        if(l1 > r1 || l2 > r2) return null
        const root = new TreeNode(post[r1])
        let mid = l2
        while(inO[mid] !== root.val){
            mid ++
        }
        root.left = build(l1 , l1 + (mid - l2 -1), l2, mid -1)
        root.right = build(l1 + (mid -l2), r1 - 1, mid + 1, r2)
        return root
    }
    return build(0, post.length - 1, 0, inO.length - 1)
};
// @lc code=end

