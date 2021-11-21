/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let isTen = false
    let result = digits.reverse()
   result.forEach((el, index,self) => {
        if(index === 0){
            el += 1
            if(el >= 10){
                el %= 10
                isTen = true
            } else {
                isTen = false
            }
            self[index] = el
        } else {
            if(isTen){
                el += 1
                if(el >= 10){
                el %= 10
                isTen = true
                } else {
                    isTen = false
                }
            self[index] = el
            }
        }
    })
    if(isTen){
        result.push(1)
    }
   return result.reverse()
};
// @lc code=end

