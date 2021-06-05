let queueSize : number;
let queue: number[]=[];
let front:number;
let rear:number;
queueSize=5;
front=0;
rear=0;

const isQueueEmpty = (): boolean => {
    return front == queue.length; 
}

const isQueueFull = (): boolean => 
{
    return queue.length == queueSize;
}

const queuePeek = () : void => {
    console.log("Peek value : "+queue[front]);
}

const Enqueue = (num : number) : void => {
    if(isQueueFull()){
        console.log("Queue is FULL!, can't enqueue : "+num);
    }
    else{
        queue[rear]=num;
        rear=rear+1;
        console.log(num+" is queued");
    }
} 

const Dequeue = () : void => {
    if(isQueueEmpty()){
        console.log("Queue is EMPTY..!!");
    }
    else{
        console.log(queue[front]+" is deleted from queue");
        for (let i = front; i < queue.length; i++) {
            queue[i]=queue[i+1];
        }
        rear--;
        queue.length--;
    }
} 

Dequeue();
Enqueue(10);
Enqueue(20);
Enqueue(30);
Enqueue(40);

console.log(queue);
queuePeek();
Dequeue();

console.log(queue);
Enqueue(50);
Enqueue(60);
queuePeek();

console.log(queue);
Dequeue();
Enqueue(70);
Enqueue(80);


console.log(queue);

