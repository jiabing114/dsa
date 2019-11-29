/**
 * es6中引入了Set的数据结构，
 * 只包括values\size\add\remove\has等操作，不包括基本的集合operation:
 *  1. union         并集
 *  2. intersection  交集
 *  3. difference    差集
 *  4. subset        包含关系
 */
function mySet() {
    var collection = [];

    // 将element加入到set中，返回true;如果已有该元素，返回false
    this.add = function(element) {
        if (collection.indexOf(element) === -1) {
            collection.push(element);
            return true;
        }
        return false;

    }

    // 将element从set中移除，返回true；如果没有该元素，返回false
    this.remove = function(element) {
        if (this.has(element)) {
            const index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // 某element是否在集合中
    this.has = function(element) {
        if (collection.indexOf(element) !== -1) {
            return true;
        }
        return false;
    }

    this.values = function() {
        return collection;
    }

    this.size = function() {
        return collection.length;
    }

    // 取并集，并返回结果
    this.union = function(otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });

        return unionSet;        
    }

    // 取交集
    this.intersection = function(otherSet) {
        const intersectionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });

        return intersectionSet;
    }

    // 取差集  A - B
    this.difference = function(otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            if (!secondSet.has(e)) {
                differenceSet.add(e);
            }
        });

        return differenceSet;
    }

    // A是否为B的子集
    this.subset = function(otherSet) {
        const firstSet = this.values();
        const secondSet = otherSet.values();
        return firstSet.every(function(e) {
            return otherSet.has(e);
        });
    }
}

/**
 * Examples
 */

const setA = new mySet();
const setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));

console.log(setA.intersection(setB).values());