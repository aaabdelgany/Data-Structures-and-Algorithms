class Node {
  constructor(dataPoint) {
    this.dataPoint = dataPoint;
    this.next = null;
    this.prev = null;
  }

  switchySwitch() {
    let temp = this.prev;
    this.prev = this.next;
    this.next = temp;
  }
}

class DoubleLinkedList {
  constructor(dataPoint) {
    this.head = null;
    this.size = 0;
  }

  add(dataPoint) {
    const node = new Node(dataPoint);

    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      current.next.prev = current;
      this.size++;
    }
  }
  insertAt(dataPoint, index) {
    const node = new Node(dataPoint);
    let currIndex = 0;
    let current = this.head;
    let prev = null;
    if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
      return;
    }
    while (current.next && currIndex < index) {
      currIndex++;
      prev = current;
      current = current.next;
    }
    node.next = current;
    current.prev = node;
    prev.next = node;
    this.size++;
  }

  removeFrom(index) {
    let current = this.head;
    let currIndex = 0;
    let prev = null;
    let next = null;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    while (current.next && currIndex < index) {
      prev = current;
      current = current.next;
      next = current.next;
      currIndex++;
    }
    if (currIndex === index) {
      prev.next = next;
      next.prev = prev;
      this.size--;
    }
  }

  removeDataPoint(dataPoint) {
    let current = this.head;
    let prev = null;
    let next = null;
    if (this.head.dataPoint === dataPoint) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    while (current.next) {
      prev = current;
      current = current.next;
      next = current.next;
      if (current.dataPoint === dataPoint) {
        prev.next = next;
        next.prev = prev;
        this.size--;
        return;
      }
    }
  }
  indexOf(dataPoint) {
    let current = this.head;
    let index = 0;
    if (current.dataPoint === dataPoint) return 0;
    while (current.next) {
      current = current.next;
      index++;
      if (current.dataPoint === dataPoint) return index;
    }
    return -1;
  }
  isEmpty() {
    return this.size === 0;
  }
  size_of_list() {
    return this.size;
  }
  printList() {
    let current = this.head;
    const printString = [];
    printString.push(current.dataPoint);
    while (current.next) {
      current = current.next;
      printString.push(current.dataPoint);
    }
    return printString;
  }

  reverse() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current.next) {
      next = current.next;
      prev = current;
      current.switchySwitch();
      current = next;
    }

    this.head = current;
    current.next = prev;
    current.prev = null;
  }
}
DoubleLinkedList.prototype.toString = function () {
  let head = this.head;
  let result = '';
  while (head) {
    if (head.prev)
      result += head.prev.dataPoint + ' ' + head.dataPoint + ' <->';
    else result += head.dataPoint + ' <-> ';

    head = head.next;
  }
  return result;
};
const ok = new DoubleLinkedList();
ok.add(5);
ok.add(10);
ok.add(3);
ok.add(15);
ok.add(17);
ok.insertAt(6, 1);
ok.removeFrom(3);
ok.add(75);
console.log(ok.printList());
ok.removeDataPoint(6);
console.log(ok.printList());
console.log(ok.indexOf(75));
console.log(ok.isEmpty());
console.log(ok.size_of_list());
ok.removeFrom(15);
ok.insertAt(67, 0);
console.log(ok.toString());
ok.reverse();
console.log(ok.toString());
