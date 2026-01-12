/* 

Node class / factory, containing a value property and a nextNode property, set both as null by default.

*/

export { Node };

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = null;
  }
}
