const ListNode = function (x) {
  this.value = x;
  this.next = null;
}


class Queue {
  constructor() {
    this.head = null; //not first element
    this.tail = null; //not last element
  }

  getUnderlyingList() {
    if (this.head === null) { //no nodes
      return null;
    } else {
      let tempNode = this.head;
      return tempNode; 
    }
  }

  enqueue(el) { //add el on the tail
    let node = new (ListNode);
    node.value = el;
    node.next = null;
    if (this.head === null) { // queue is empty (no nodes)
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; //state element in the end
      this.tail = node;  //now tail - is element
    }
  }

  dequeue() {
    if (this.head === null) { //no nodes
      return null;
    } else {
      let valueHead = this.head.value; //value in head
      this.head = this.head.next; //change head
      return valueHead;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.getUnderlyingList());

