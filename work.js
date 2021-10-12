const ListNode = function (x) {
  this.value = x;
  this.next = null;
}

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; //not first element
    this.tail = null; //not last element
  }

  getUnderlyingList() {

  }

  enqueue(el) { //add el on the tail
    let node = new (ListNode);
    node.value = el;
    node.next = null;
    if (this.head === null) { // queue is empty
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node; //state element in the end
      this.tail = node;  //now tail - is element
    }
  }

  dequeue() {

    if (this.head === null) {
      return null;
    }
    else {

      let valueHead = this.head.value;
      this.head = this.head.next;
    }

  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
