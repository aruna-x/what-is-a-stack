class Stack {
  constructor() {
    this.stack = [];
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.stack.length < this.limit) {
      this.stack.push(item);
    }
    else {
      throw Error("Oops! The stack is full.");
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop();
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length-1];
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.stack.length === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.stack.length === this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    const len = this.stack.length-1;
    const res = this.stack.indexOf(target)
    return res === -1 ? res : len-res;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack)
  }
}

if (require.main === module) {
  let stack = new Stack;
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);

  console.log("Expect: [1, 2, 3, 4, 5]");
  console.log("=>", (() => {
    return stack.print();
  })());

  console.log("")

  console.log("Expect: 2");
  console.log("=>", (() => {
    return stack.search(3);
  })());
}

module.exports = Stack;
