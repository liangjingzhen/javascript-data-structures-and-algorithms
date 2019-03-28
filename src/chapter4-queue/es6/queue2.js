// use WeakMap
let Queue2 = (function () {

    const items = new WeakMap();

    class Queue2 {

        constructor() {
            items.set(this, []);
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            return q.shift();
        }

        front() {
            let q = items.get(this);
            return q[0];
        }

        isEmpty() {
            let q = items.get(this);
            return q.length === 0;
        }

        size() {
            let q = items.get(this);
            return q.length;
        }

        print() {
            let q = items.get(this);
            console.log(q.toString());
        }
    }

    return Queue2;
})();


// tests
let queue = new Queue2();
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