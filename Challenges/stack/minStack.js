class MinStack {
  constructor() {
    this.minElement = null;
    this.stack = [];
  }

  push(x) {
    //If stack is empty, insert x into the stack and make it equal to the minElement
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.minElement = x;
    }
    //If stack is not empty
    if (this.stack.length !== 0) {
      if (x >= this.minElement) {
        this.stack.push(x);
      }

      if (x < this.minElement) {
        this.stack.push(2 * x - this.minElement);
        this.minElement = x;
      }
    }
  }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
console.log(minStack);
