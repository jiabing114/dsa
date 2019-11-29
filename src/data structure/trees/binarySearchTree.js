
/**
 * Node节点
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * 二叉搜索树： binary search Tree
 *  定义： 二叉搜索树中，对每一个节点，其左子树中的值
 *        都要小于根节点；右子树中的值都要大于根节点。
 *  操作：
 *    1. 增加
 *    2. 删除
 * 
 * runtime: search\delete\insertion  O(lgn) in average
 */
class BST {
    constructor() {
        this.root = null;  // 根节点为null
    }

    // 向二叉搜索树中添加数据
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }

            return searchTree(node);
        }
    }

    // 最小值  
    // O(lgn) in average; O(n) in bad situation
    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // 最大值
    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    // search
    findData(data) {
        let current = this.root;
        while(current.data !== data) {
           if (data < current.data) {
               current = current.left;
           } else {
               current = current.right;
           }

           // 没有找到
           if (current === null) {
               return null;
           }
        }
        return current;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }

            // 找到需要删除的节点
            if (data === node.data) {
                // 1. 删除的节点为叶子节点
                // 2. 删除的节点，某个分支节点为null
                // 3. 删除的节点，包含左右分支
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }

                // node has two children
                let tempNode = node.right;
                while(tempNode.left !== null) { 
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    // 中序遍历
    inOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = new Array();
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    // 先序遍历(dfs)
    preOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = new Array();
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    // 后序遍历
    postOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = new Array();
            function traversePostOrder(node) {
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }

    // 层次遍历(bfs) queue
    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root !== null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left !== null) {
                    Q.push(node.left);
                }
                if (node.right !== null) {
                    Q.push(node.right);
                }
            }

            return result;
        } else {
            return null;
        }
    }
}

module.exports = BST;

/**
 * Examples
 */

const bst = new BST();
const bst1 = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

bst.remove(1);
console.log(bst.findMax());
console.log(bst.findMin());

/**
 *             9
 *          /      \  
 *        4          17
 *      /    \      /   \
 *     3      6   10     22 
 *           /  \       /
 *          5    7    20
 */
bst1.add(9);
bst1.add(4);
bst1.add(17);
bst1.add(3);
bst1.add(6);
bst1.add(10);
bst1.add(22);
bst1.add(5);
bst1.add(7);
bst1.add(20);

console.log(bst1.inOrder());
console.log(bst1.levelOrder());
