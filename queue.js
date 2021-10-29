/* Polyfill of Queue
Queue: works on FIFO(First In First Out) */

class Queue {
    constructor() {
        this.item = []
        this.count = 0
    }

    //Push function - returns the length of the stack
    push(element) {
        this.item[this.count] = element;
        this.count += 1;
        return this.count;
    }

    //Pop function - returns the deleted element from end of the stack
    pop() {
        if (this.count == 0) {
            return "NULL! Queue is Empty"; //returns null if stack is empty
        } else {
            let Element = this.item[0];
            delete this.item[0]
            this.item[0] = this.item[1]
            this.count -= 1
            return Element;
        }
    }
}
const queue = new Queue();
console.log(queue);
console.log(queue.push(1));
console.log(queue.push(2));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());