/**
 * 类似于Stack，js中可以用Array模拟Queue,
 * 因为Array中添加元素，有push\unshift\splice;删除元素有pop\shift\splice
 */
function Queue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.size = function() {
        return collection.length;
    }

    this.empty = function() {
        return (collection.length === 0);
    }
}

module.exports = Queue;
