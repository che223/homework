/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    const n = nums.length
    const s = [0]
    for(let i = 1; i <= n; i++){
        s[i] = s[i - 1] + nums[i - 1]
    }
    const count = new Map()
    count[0] = 1
    let ans = 0
    for(let i = 1; i <= n; i++){       
        if(count[s[i] - k]){
            ans += count[s[i] - k]
        }
        if(count[s[i]]){
            count[s[i]] ++
        }else {
            count[s[i]] = 1
        }
    }
    return ans
};
// @lc code=end

