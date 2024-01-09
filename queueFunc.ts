// 泛型: 在定义的时候方法时，没有明确类型，调用时根据传入的参数来确定参数类型以及函数返回值
function reverse<T>(items: T[]): T[] {
    const toreturn: T[] = [];
    for (let i = items.length - 1; i >=0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
} 

const sample = [1, 3, 4];
let reversed = reverse(sample);

