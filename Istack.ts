// 定义栈的接口
interface Istack<T> {
  push(Element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): Boolean;
  size(): Number;
}

export default Istack;
