// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let current = l;
  if (!l) return [];
  if (l.value === k) {
    l = l.next;
    current = l;
  }
  let prev = current;

  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  if (l && l.value !== k) {
    return l;
  } else {
    return [];
  }
}

console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
