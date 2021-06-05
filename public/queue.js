"use strict";
var queueSize;
var queue = [];
var front;
var rear;
queueSize = 5;
front = 0;
rear = 0;
var isQueueEmpty = function () {
    return front == queue.length;
};
var isQueueFull = function () {
    return queue.length == queueSize;
};
var queuePeek = function () {
    console.log("Peek value : " + queue[front]);
};
var Enqueue = function (num) {
    if (isQueueFull()) {
        console.log("Queue is FULL!, can't enqueue : " + num);
    }
    else {
        queue[rear] = num;
        rear = rear + 1;
        console.log(num + " is queued");
    }
};
var Dequeue = function () {
    if (isQueueEmpty()) {
        console.log("Queue is EMPTY..!!");
    }
    else {
        console.log(queue[front] + " is deleted from queue");
        for (var i = front; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        rear--;
        queue.length--;
    }
};
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
