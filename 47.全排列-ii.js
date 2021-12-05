/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const result = []
    const chosen = []
    const used = []
    //将数组排序，将相同的节点放在一起
    nums = nums.sort()
    const n = nums.length 
    function dfs(pos){
        if(pos === n){
            result.push([...chosen])
            return
        }
        for(let i = 0; i < n; i++){
            if(!used[i]){
                //剪枝操作，当前节点和上一轮循环节点相同，这次循环就不需要进入
                //剪枝并不会降低时间复杂度，但是可以减少答案里的重复元素
                if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
                chosen.push(nums[i])
                used[i] = true            
                dfs(pos + 1)
                //当下一层遍历完后，就要回到当前层数，并且对当前层数之前的操作做逆操作
                //这一步就是回溯   
                used[i] = false
                chosen.pop()
            }
        }
    }
    dfs(0)
    return result
};
// @lc code=end

