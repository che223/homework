/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    //存放出度点的数组，该数组的下标就是出度点，值是存放着对应入度点的数组
    const to = new Array(numCourses)
    for(let i = 0; i < to.length; i++){
        to[i] = []
    }
    //记录对应入度点的入度数的数组
    const deg = new Array(numCourses).fill(0)
    //因为必须要先选bi才能选ai，所以bi是出度点，ai是入度点
    for(let i = 0; i < prerequisites.length; i++){
        const ai = prerequisites[i][0]
        const bi = prerequisites[i][1]
        to[bi].push(ai)
        deg[ai] ++
    }
    //创建一个队列，只有队列里存放入度数为0的点
    const q = []
    const lessons = []
    //先将入度数为0的一些点放入队列中
    for(let j = 0; j < deg.length; j++){
        if(deg[j] === 0){
            q.push(j)
        }
    }
    while(q.length !== 0){
        const front = q.splice(0, 1)[0]
        lessons.push(front)
        //遍历该点的所有入度点，因为这个点从队列中移出了，所以所有的入度点的入度数需要减1
        for(let k = 0; k < to[front].length; k++){
            deg[to[front][k]] --
            //当该点的入度数等于0时，就可以入队
            if(deg[to[front][k]] === 0){
                q.push(to[front][k])
            }
        }
    }
   return lessons.length === numCourses ? lessons : []
};
// @lc code=end

