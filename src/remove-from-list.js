class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // Handle the head of the list if it matches `k`
  while (l && l.value === k) {
    l = l.next;
  }

  let current = l;

  // Traverse the list and remove nodes with value `k`
  while (current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
