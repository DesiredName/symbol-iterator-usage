class UsersQueue {
    #list = [];

    constructor() {
        this.#list = [];
    }

    enqueue(entry) {
        this.#list = [entry].concat(this.#list);
    }

    dequeue() {
        return this.#list.pop();
    }

    peek() {
        return this.#list[this.#list.length - 1];
    }

    flash() {
        const copy = this.#list.slice();

        this.#list = [];

        return copy;
    }

    *[Symbol.iterator]() {
        for (const user of this.#list) {
            yield user;
        }
    }
}

const queue = new UsersQueue();
queue.enqueue({ id: 1, name: 'user_001 ' });
queue.enqueue({ id: 2, name: 'user_002 ' });
queue.enqueue({ id: 3, name: 'user_003 ' });
queue.enqueue({ id: 4, name: 'user_004 ' });
queue.enqueue({ id: 5, name: 'user_005 ' });

for (const user of queue) {
    console.log(user);
}
