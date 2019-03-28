function Queue() {
    this.items = [];
}

/**
 * 向队列尾部添加一个（或多个）新的项
 * @param element
 */
Queue.prototype.enqueue = function (element) {
    this.items.push(element);
};

/**
 * 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
 * @return element
 */
Queue.prototype.dequeue = function () {
    return this.items.shift();
};

/**
 * 返回队列中第一个元素
 * @return element
 */
Queue.prototype.front = function () {
    return this.items[0];
};

/**
 * 判断队列是否为空
 * @return boolean 如果队列中不包含任何元素，返回true，否则返回false
 */
Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
};

/**
 * 返回队列包含的元素个数
 * @return number
 */
Queue.prototype.size = function () {
    return this.items.length;
};

Queue.prototype.print = function () {
    console.log(this.items.toString());
};


// tests
let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();