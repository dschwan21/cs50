//create a linked list class in javascript
const LinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(item) {
        if (this.length === 0) {
            this.head = item;
            this.tail = item;
            this.length++;
        } else {
            this.tail.next = item;
            this.tail = item;
            this.length++;
        }
    }
    remove(item) {
        if (this.length === 0) {
            return;
        }
        if (this.head === item) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let current = this.head;
        while (current.next !== item) {
            current = current.next;
        }
        current.next = item.next;
        this.length--;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    getAll() {
        let current = this.head;
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(current.item);
            current = current.next;
        }
        return arr;
    }
    getAllReverse() {
        let current = this.tail;
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(current.item);
            current = current.prev;
        }
        return arr;
    }
    getAllInOrder() {
        let current = this.head;
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(current.item);
            current = current.next;
        }
        return arr;
    }
    getAllInReverseOrder() {
        let current = this.tail;
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(current.item);
            current = current.prev;
        }
        return arr;
    }
}

//create linked list node class in javascript
const LinkedListNode = class {
    constructor(item) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

let list = new LinkedList();

//add some nodes to the linked list
list.add(new LinkedListNode(1));
list.add(new LinkedListNode(2));

//console out the linked list
console.log(list.getAllInReverseOrder());