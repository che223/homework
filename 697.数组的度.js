/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    const numsMap = new Map()
    const n = nums.length
    let degree = 0
    for(let i = 0; i < n; i ++){
        if(numsMap[nums[i]]){
            numsMap[nums[i]] += 1
        } else {
            numsMap[nums[i]] = 1
        }
        degree = Math.max(degree, numsMap[nums[i]])
    }
    let min = 50000 
    let l = 0
    let r = 0
    const count = new Map()
    while(r < n){
        if(count[nums[r]]){
            count[nums[r]] ++
        } else {
            count[nums[r]] = 1
        }
        if(count[nums[r]] >= degree){
            while(l <= r && count[nums[r]] >= degree){
            count[nums[l]] --
            l ++
        }
        min = Math.min(min, r - l + 2)
        }
        r ++
    }
    return min
};
// @lc code=end

