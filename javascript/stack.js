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
    } else {
      throw new Error("Stack is full!");
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
    if (this.stack.length === 0) return true;
    else return false;
  }

  // return true if stack is full, otherwise false
  isFull() {
    if (this.stack.length === this.limit) return true;
    else return false;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    const maxInd = this.stack.length-1;
    for (let i=maxInd; i>=0; i--) {
      if (this.stack[i] === target) return maxInd-i;
    }
    return -1;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack);
  }
}

if (require.main === module) {
  console.log("Expect: 2");
  console.log("=>", (() => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    return stack.print();
  })());
}

module.exports = Stack;
