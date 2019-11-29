/**
 * 实际上，使用Array完全可以代替Stack
 */
function Stack() {
    this.item = {};
    this.count = 0;

    // 添加一个元素到栈顶
    this.push = function(value) {
        this.item[this.count] = value;
        this.count++;
    }

    // 弹出一个栈顶元素
    this.pop = function() {
        if (this.count < 0) {
            return null;
        }
        this.count--;
        const result = this.item[this.count];
        delete this.item[this.count];
        return result;
    }

    // 栈的大小
    this.size = function() {
        return this.count;
    }

    // 返回栈顶元素，但不弹出
    this.peek = function() {
        return this.item[this.count - 1];
    }
}

module.exports = Stack;

/**
 * Examples
 */

const stack = new Stack();
stack.push('a');
stack.push('b');
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.size());
