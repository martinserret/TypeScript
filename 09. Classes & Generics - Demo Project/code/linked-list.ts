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

  insertAt(value: T, position: number) {
    if (position > -1 && position < this.length && this.root) {
      let current = this.root;
      let previous = current;
      let index = 0;
      let node = new ListNode(value);

      if (position == 0) {
        node.next = this.root;
        this.root = node;
      } else {
        while (index != position && current.next) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position: number) {
    if (position > -1 && position < this.length && this.root) {
      let current = this.root;
      let previous = current;
      let index = 0;

      if (position == 0) {
        this.root = current.next;
      } else {
        while (index != position && current.next) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return true;
    } else {
      return false;
    }
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

console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW INSERTING AT INDEX 0 ---');
numberList.insertAt(100, 0);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(1000, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW REMOVING AT INDEX 0 ---');
numberList.removeAt(0);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW REMOVING AT INDEX 4 ---');
numberList.removeAt(4);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW REMOVING AT INDEX 1 ---');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();


const nameList = new LinkedList<string>();