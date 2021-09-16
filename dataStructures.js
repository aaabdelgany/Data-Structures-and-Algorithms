class Node {
  constructor(dataPoint) {
    this.dataPoint = dataPoint;
    this.next = null;
  }
}

class LinkedList {
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
      this.size++;
    }
  }
  insertAt(dataPoint, index) {
    const node = new Node(dataPoint);
    let currIndex = 0;
    let current = this.head;
    let prev = null;
    while (current.next && currIndex < index) {
      currIndex++;
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }

  removeFrom(index) {
    let current = this.head;
    let currIndex = 0;
    let prev = null;
    let next = null;
    while (current.next && currIndex < index) {
      prev = current;
      current = current.next;
      next = current.next;
      currIndex++;
    }
    prev.next = next;
    this.size--;
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
        return;
      }
    }
  }
  // functions to be implemented
  // add(element)
  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList
}
LinkedList.prototype.toString = function () {
  let head = this.head;
  let result = [];
  while (head) {
    result.push(head.dataPoint);
    console.log();
    head = head.next;
  }
  return result.join(', ');
};
const ok = new LinkedList();
ok.add(5);
ok.add(10);
ok.add(3);
ok.add(15);
ok.add(17);
ok.insertAt(6, 1);
ok.removeFrom(3);
ok.add(75);
console.log(ok.toString());
ok.removeDataPoint(6);
console.log(ok.toString());
