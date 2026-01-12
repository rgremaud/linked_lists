import { LinkedList } from "./lib/linked_list.js";

const linkedList = new LinkedList();
linkedList.append("Howie");
linkedList.append("Whitney");
linkedList.append("Dad");
linkedList.append("Theo");
// console.log(linkedList.findIndex("Howie"));
console.log(linkedList.at(3));
console.log(linkedList.findIndex("Theo"));
// console.log(linkedList.findIndex("howie"));
console.log(linkedList.toString());