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

  outList() {
    let tempNode = this.head;
    while (tempNode != null) {
      console.log(tempNode)
      tempNode = tempNode.next
    }


  }

  removeKFromList(k) {
    let node = this.head;
    let nextNode = this.head.next;
    let prevNode = null;

    while (node != null) {
      if (node.value === k) {
        if (prevNode === null) { // if k in head
          this.head = nextNode;   //change head
          node = nextNode;
          nextNode = nextNode.next; //change next node (go to next)
        } else {
          prevNode.next = node.next; //change link - del node
          node = nextNode; // change node (then in this cycle go to next node)
           if (nextNode != null ) { 
              nextNode = node.next; // change next node
           }
        }
      } else { // if no k
        prevNode = node;
        node = nextNode;
        if (nextNode != null ) { 
        nextNode = node.next;
        }
      }
    }
  }



}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
//  console.log(queue);
// console.log(queue.getUnderlyingList());
queue.outList();
console.log('--------');
queue.removeKFromList(3);
queue.outList();

