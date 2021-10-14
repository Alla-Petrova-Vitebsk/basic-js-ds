// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let node = l;
  let nextNode = l.next;
  let prevNode = null;

  while (node != null) {
    if (node.value === k) {
      if (prevNode === null) { // if k in head
        l = nextNode;   //change head
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
return l;
}
  


