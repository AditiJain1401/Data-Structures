/* Polyfill of Queue
Queue: works on FIFO(First In First Out) */

class Queue {
    constructor() {
        this._storage = []
        this._count = 0
    }

    //Enqueue function - returns the length of the stack
    enqueue(element) {
        this._storage[this._count] = element;
        this._count ++;
        return this._count;
    }

    //Dequeue function - returns the deleted element from end of the stack
    dequeue() {
        if (this._count == 0) {
            return "NULL"; //returns null if stack is empty
        } else {
            let element = this._storage[0];
            delete this._storage[0]
            this._storage[0] = this._storage[1]
            this._count -= 1
            return element;
        }
    }
}
const queue = new Queue();
console.log(queue);
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
