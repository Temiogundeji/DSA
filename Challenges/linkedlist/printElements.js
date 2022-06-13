import Node from "../../Data Structures/utils/Node";

const printLinkedList = (head) => {
  let current = new Node();
  current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
};
