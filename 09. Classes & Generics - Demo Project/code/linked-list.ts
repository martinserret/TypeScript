class ListNode<T> {
  next?: ListNode<T>; // Optional because if this node is the last, there is not next node

  constructor(public value: T) { }
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node; // Update the property next of the node 
      this.tail = node; // Update the tail (last node) of the LinkedList
    }
    this.length++;
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();