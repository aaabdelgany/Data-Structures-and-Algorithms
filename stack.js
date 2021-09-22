class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    let current = this.head;
    node.next = current;
    this.head = node;
    this.size++;
  }

  pop() {
    let current = this.head;
    this.head = current.next;
    this.size--;
    return current;
  }

  display() {
    let temp = this.head;
    let string = '[';
    while (temp) {
      string += `${temp.data} ,`;
      temp = temp.next;
    }
    string += ']';
    console.log(string);
  }
}
const stacky = new Stack();
stacky.push(15);
stacky.push(25);
stacky.push(3);
console.log(stacky.pop());
stacky.push(7);
stacky.display();

//push and pop are constant time. print is O(n) time.
