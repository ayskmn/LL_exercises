/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if(this.length === 0) {
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  /** Get node at idx */
  getNodeAtIdx(idx) {
    let current = this.head;
    let count = 0;

    while( current!==null && count !== idx) {
      if(count == idx) 
        return current.val; 
      count ++;
      current = current.next;
    }
    return current;
  }

  getAt(idx) {
    let node = this.getNodeAtIdx(idx)
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.getNodeAtIdx(idx)
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let previous = this.getNodeAtIdx(idx -1);
    let newNode = new Node(val);
    previous.next = newNode;
    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
  }
  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let total = 0;
    while(current) {
      total += current.val;
      current = current.next;
    }
    let avg = total / this.length;
    return avg;
  }
}

module.exports = LinkedList;
