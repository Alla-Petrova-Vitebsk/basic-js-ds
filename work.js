//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
**/
class Stack {
  constructor() {
    this.stack = [];  //init array
  }

  push(el) {
    this.stack.push(el);  // array method - push
  }

  pop() {
    this.stack.pop(); //array method - push
  }

  peek() {
    return (this.stack[this.stack.length-1]);
  }
}


const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(7);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek());