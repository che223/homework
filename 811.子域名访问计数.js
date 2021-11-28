/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    const domainMap = new Map()
    const arr = cpdomains.map(el => {
        return el.split(' ')
    })
    arr.forEach(el => {
        const domain = el[1]
        const times = el[0]
        const domainArr = getAllDomain(domain)
        domainIncrease(domainArr, times)
    })
    function getAllDomain(domain){
        const result = [domain]
        while(domain.indexOf('.') >= 0){
            const index = domain.indexOf('.')
            const fatherDomain = domain.substring(index + 1, domain.length)
            result.push(fatherDomain)
            domain = fatherDomain
        }
        return result
    }

    function domainIncrease(domainArr, times){
        domainArr.forEach(el => {
            if(!domainMap.has(el)) {
                domainMap.set(el, times)
            } else {
                const pre = domainMap.get(el)
                domainMap.set(el, Number(times) + Number(pre))
            }
        })
    }
    return Array.from(domainMap).map(el => {
        return el[1] + ' ' + el[0]
    })
};
// @lc code=end

