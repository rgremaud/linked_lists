import { Node } from "./node.js";

export { LinkedList };

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // append(value) adds a new node containing value to the end of the list.
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

  // prepend(value) adds a new node containing value to the start of the list.
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

  // size() returns the total number of nodes in the list.
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

  // head() should return the value of the first node in the list. If the list is empty, it should return undefined.
  head() {
    if (this.head === null) {
      return undefined;
    } else {
      return this.head.value;
    }
  }

  // tail() should return the value of the final node in the list. If the list is empty, it should return undefined.
  tail() {
    if (this.tail === null) {
      return undefined;
    } else {
      return this.tail.value;
    }
  }

  // at(index) should return the value of the node at the given index. If there’s no node at the given index, it should
  // return undefined.
  // works but 1 off
  at(index) {
    let currentNode = this.head;

    if (index > this.size()) {
      return undefined;
    } else {
      for (let i = 1; i <= index; i++) {
        if (i === index) {
          return currentNode.value;
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    }
  }

  // pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just
  // return undefined.
  pop() {
    if (this.head === null) {
      return undefined;
    } else {
      this.head = this.head.nextNode;
    }
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
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

  // findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list,
  //  it should return -1. If more than one node has a value matching the given value, it should return the index of the
  //  first node with the matching value.
  // doesn't work
  findIndex(value) {
    let counter = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return counter;
      } else {
        return -1;
      }
      counter += 1;
      node = node.nextNode;
    }
  }

  // toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
  // prints all but last
  toString() { 
    const values = [];
    let node = this.head;
    while (node !== null) {
        values.push(node.value);
        node = node.nextNode;
    }
    return values;
  }
}
