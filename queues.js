//fifo data structure

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
    this.last = null;
  }

  add(data) {
    if (!this.size) {
      const node = new Node(data);
      this.head = node;
      this.size = 1;
      this.last = node;
    } else {
      const node = new Node(data);
      this.last.next = node;
      this.last = node;
      this.size++;
    }
  }

  pop() {
    if (!this.size) {
      return -1;
    }
    const first = this.head;
    this.head = first.next;
    this.size--;
    return first;
  }
  printAll() {
    let head = this.head;
    let str = '[ ';
    while (head) {
      str += `${head.data} ,`;
      head = head.next;
    }
    str += ' ]';
    console.log(str);
  }
  getSize() {
    return this.size;
  }
}

const test = new Queue();
test.add(5);
test.add(6);
test.add(7);
test.printAll();
console.log(test.pop());
console.log(test.pop());
test.printAll();
test.pop();
test.printAll();
console.log(test.getSize());
