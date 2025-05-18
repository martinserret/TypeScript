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

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();
numberList.add(1);
numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getNumberOfElements());
numberList.print();

const nameList = new LinkedList<string>();