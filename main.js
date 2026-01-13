import { LinkedList } from "./lib/linked_list.js";

const linkedList = new LinkedList();
linkedList.append("Howie");
linkedList.append("Whitney");
linkedList.append("Dad");
linkedList.append("Theo");
console.log(linkedList.toString())
console.log(linkedList.insertAt(4, "GrandP", "Nona"));
console.log(linkedList.toString())
// console.log(linkedList.headCheck())
// console.log(linkedList.removeAt(0));
// console.log(linkedList.headCheck())