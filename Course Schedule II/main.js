/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjacency = new Map()
    for (const [course, prereq] of prerequisites) {
        if (!adjacency.has(course)) adjacency.set(course, []);
        adjacency.get(course).push(prereq);
    }

    const state = new Array(numCourses).fill(0);
    const result = [];

    function dfs(course) {
        if (state[course] === 1) return false;
        if (state[course] === 2) return true;

        state[course] = 1;
        const prereq = adjacency.get(course) || [];
        for (const req of prereq) {
            if (!dfs(req)) return false;
        }

        state[course] = 2;
        result.push(course);
        return true;
    }

    for (let i=0; i<numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result;
};

/*
- Build an adjacency mapping
- DFS search
    If visiting, return false and continue with another course
    If visited, return true, and return the order of courses traversed
*/

const test_case1_prerequisites = [[1,0]];
const test_case1_numOfCourses = 2;
console.log(findOrder(test_case1_numOfCourses, test_case1_prerequisites));
const test_case2_prerequisites = [[1,0],[2,0],[3,1],[3,2]];
const test_case2_numOfCourses = 4;
console.log(findOrder(test_case2_numOfCourses, test_case2_prerequisites));
const test_case3_prerequisites = [];
const test_case3_numOfCourses = 1;
console.log(findOrder(test_case3_numOfCourses, test_case3_prerequisites));