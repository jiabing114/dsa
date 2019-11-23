/**
 *         B - - - D    
 *       / |    /  | \
 *      A  |   /   |  F
 *       \ |  /    |
 *         C - - - E
 */
const graph = {
    "A": ["B", "C"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "D", "E"],
    "D": ["B", "C", "E", "F"],
    "E": ["C", "D"],
    "F": ["D"],
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