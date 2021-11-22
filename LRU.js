class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRU {
  constructor(limit) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.limit = limit;
    this.map = new Map();
  }

  write(key, value) {
    const node = this.map.get(key);
    if (node) {
      this.map.delete(key);
      this.size--;
    }
    if (this.size === this.limit) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      this.map.set(key, null);
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    if (this.head) {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
      this.size++;
    } else {
      this.head = newNode;
      this.tail = this.head;
      this.size++;
    }
  }
  read(key) {
    const node = this.map.get(key);
    if (node) {
      const prev = node.prev;
      const next = node.next;
      if (prev) {
        prev.next = next;
      } else {
        this.head = node.next;
      }
      if (next) next.prev = prev;

      node.next = null;
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.map.set(key, node);
      return node.value;
    } else {
      return undefined;
    }
  }
  getLRU() {
    return this.head;
  }
  getMRU() {
    return this.tail;
  }
}
const y = new LRU(2);
y.write(3, 5);
y.write(4, 6);
y.write(8, 7);
// console.log(y.getMRU());
// console.log(y.getLRU());
console.log(y.read(4));
y.read(8);
y.write(18, 27);
console.log(y.getLRU());

// console.log(y.getMRU());
// y.write(5, 5);

// console.log(y.getLRU());
// console.log(y.getMRU());
