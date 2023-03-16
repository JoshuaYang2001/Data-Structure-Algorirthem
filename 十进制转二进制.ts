import { ArrayStack } from "./01重构";
function decimalTobinary(decimal: number): string {
  const stack = new ArrayStack<number>();
  while (decimal > 0) {
    const result = decimal % 2; // 拿余数
    stack.push(result);
    decimal = Math.floor(decimal / 2);
  }
  while (!stack.isEmpty()) {
    console.log(stack.pop());
  }
  return "";
}

decimalTobinary(25);
