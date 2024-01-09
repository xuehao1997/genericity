/**
 * 利用泛型限制，使得push进入与pop出来的类型一致。
 */
// 泛型类
class Queue<T> {
    private data: T[] = [];
    push = (item: T) => this.data.push(item);
    pop = (): T | undefined => this.data.shift();
}

const queue = new Queue<number>();
// 规定推入的只能是数字
queue.push(0);