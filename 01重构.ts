import Istack from "./Istack";

class ArrayStack<T> implements Istack<T> {
  private data: T[] = [];
  push(elelmet: T): void {
    this.data.push(elelmet);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  isEmpty(): Boolean {
    return this.data.length === 0;
  }
  size(): Number {
    return this.data.length;
  }
}

const stack = new ArrayStack<string>();
stack.push("AAA");
stack.push("BBB");
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());

export { ArrayStack };
