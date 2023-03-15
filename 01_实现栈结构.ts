class ArrayStack {
  private data: any[] = [];
  push(elelmet: any): void {
    this.data.push(elelmet);
  }
  pop(): any {
    return this.data.pop();
  }
  peek(): any {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
}

const stack = new ArrayStack();

stack.push("AAA");
stack.push("BBB");
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
