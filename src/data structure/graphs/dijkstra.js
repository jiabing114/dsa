/**
 *         B - - - D    
 *       / |    /  | \
 *      A  |   /   |  F
 *       \ |  /    |
 *         C - - - E
 */
const graph = {
    "A": {"B": 5, "C": 1},
    "B": {"A": 5, "C": 2, "D": 1},
    "C": {"A": 1, "B": 2, "D": "4", "E": "8"},
    "D": {"B": 1, "C": 4, "E": 3, "F": 6},
    "E": {"C": 8, "D": 3},
    "F": {"D": 6},
}

/**
 * BFS: Breath First Search 宽度优先遍历
 * @param {JSON} graph 
 * @param {String} s 
 */
function BFS(graph, s) {
    const queue = [];
    queue.push(s);
    const seen = new Set();
    seen.add(s);
    while(queue.length > 0) {
        const vertex = queue.shift();
        const nodes = graph[vertex];
        for(const node of nodes) {
            if(!seen.has(node)) {
                queue.push(node);
                seen.add(node);
            }
        }
        console.log(vertex);
    }
}

BFS(graph, "E");