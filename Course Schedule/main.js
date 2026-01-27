/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqRoutes = new Map();

    prerequisites.forEach((prereq) => {
        const rootCourse = prereq[0];
        const dependentCourse = prereq[1];
        if (!prereqRoutes.has(dependentCourse)) {
            prereqRoutes.set(dependentCourse, [rootCourse]);
        } else {
            prereqRoutes.get(dependentCourse).push(rootCourse);
        }
    });
    
    // console.log(prereqRoutes);
    const state = new Array(numCourses).fill(0);
    
    function DFSTraverse(course) {
        if (state[course] === 1) return false; // back-edge => cycle
        if (state[course] === 2) return true;  // already processed => safe

        state[course] = 1; // mark visiting
        const neighbors = prereqRoutes.get(course) || [];
        for (const next of neighbors) {
            if (!DFSTraverse(next)) return false;
        }
        state[course] = 2; // mark visited
        return true;
    }

    for(var i=0; i<numCourses; i++) {
        if (!DFSTraverse(i)) return false;
    }
    
    return true;
};

const test_case1 = [[1,0]];
const test_case2 = [[1,0],[0,1]];
const test_case3 = [[1,0],[2,1],[3,2],[4,2],[5,3],[6,5],[2,6],[7,4]];
const test_case4 = [[1,4],[2,4],[3,1],[3,2]];
const test_case5 = [[1,0],[0,3],[0,2],[3,2],[2,5],[4,5],[5,6],[2,4]];
console.log(canFinish(2, test_case1));
console.log(canFinish(2, test_case2));
console.log(canFinish(8, test_case3));
console.log(canFinish(5, test_case4));
console.log(canFinish(7, test_case5));