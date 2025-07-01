class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
    // this.items = [];
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
    return this.head;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;

    return node.item;
  }
}

module.exports = Stack;
