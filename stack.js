/* Polyfill of Stack
Stack: works on LIFO(Last In First Out) */

class Stack {
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
            return "NULL! Stack is Empty"; //returns null if stack is empty
        } else {
            let Element = this.item[this.count - 1];
            delete this.item[this.count - 1]
            this.count -= 1
            return Element;
        }
    }
}
const stack = new Stack();
console.log(stack);
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());