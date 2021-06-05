let maxSize : number;
let stack: number[]=[];
maxSize=5;

const isEmpty = (): boolean => {

    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }

}

const isFull = (): boolean => 
{
    return stack.length == maxSize;
}

const peek = () : void => {
    console.log("Peek value : "+stack[stack.length-1]);
}

const Push = (num: number): void => {
    if (isFull()) {
        console.log("Stack is FULL!, can't push : "+num);
    }
    else {
        stack[stack.length++] = num;
        console.log("push "+num+" in stack");
    }
}

const Pop = (): void => {
    let num : number = 0;
    if (isEmpty()) {
        console.log("Stack is EMPTY..!!");
    }
    else {
        console.log("Poped "+stack[stack.length-1]+" from stack");
        stack.length--;
    }
}

Pop();
Push(10);
Push(20);
Push(30);
peek();
console.log(stack);
Pop();
console.log(stack);
Push(40);
console.log(stack);
Push(50);
Pop();
console.log(stack);
peek();
Push(60);
Push(70);
Push(80);
console.log(stack);
