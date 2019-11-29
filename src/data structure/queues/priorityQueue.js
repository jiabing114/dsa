/**
 * priorityQueue 优先队列
 */
function priorityQueue() {
    let collection = [];

    this.printCollection = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if (this.size === 0) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (collection[i][1] > element[1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            // collection中的优先级比element都大
            if (!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        return collection.shift()[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

module.exports = priorityQueue;

/**
 * Examples
 */
let pq = new priorityQueue();
pq.enqueue(['chongqin province', 3]);
pq.enqueue(['shanghai province', 2]);
pq.enqueue(['beijing province', 1]);
pq.printCollection();
pq.dequeue();
pq.printCollection();



