import { LinkedList } from "./lib/linked_list.js";

const linkedList = new LinkedList();
linkedList.append("Howie");
linkedList.append("Whitney");
linkedList.append("Dad");
linkedList.append("Theo");
console.log(linkedList.toString());
console.log(linkedList.removeAt(2));
console.log(linkedList.toString());