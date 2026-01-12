import { Node } from "./node.js";

export { LinkedList };

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    if (this.head === null) return 0;

    let size = 1;
    let node = this.head;

    while (node.nextNode !== null) {
      node = node.nextNode;
      size += 1;
    }

    return size;
  }

  head() {
    if (this.head === null) {
      return undefined;
    } else {
      return this.head.value;
    }
  }

  tail() {
    if (this.tail === null) {
      return undefined;
    } else {
      return this.tail.value;
    }
  }

  at(index) {
    let currentNode = this.head;

    if (index > this.size()) {
      return undefined;
    } else {
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return currentNode.value;
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    }
  }

  pop() {
    if (this.head === null) {
      return undefined;
    } else {
      this.head = this.head.nextNode;
    }
  }

  contains(value) {
    let node = this.head;
    while (node.nextNode !== null) {
      if (node.value === value) {
        return true;
      } else {
        return false;
      }
      node = node.nextNode;
    }
  }

  findIndex(value) {
    let counter = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return counter;
      } 
      counter += 1;
      node = node.nextNode;
    }
    return -1;
  }

  toString() { 
    let string = ""
    let node = this.head;
    while (node !== null) {
        string = string + ` ( ${node.value} ) ->`
        node = node.nextNode;
    }
    string += " null";
    return string;
  }

  /*
  insertAt(index, ...values) should insert new nodes with the given values at the given index. For example:
  If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a RangeError
  */

  /*
  removeAt(index) that removes the node at the given index. 
  If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError
  */

}
