class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

const LinkedList = () => {
    let size = 1;
    let values = new Node(0);
    let head = values
    let last = values

    const append = (value) => {
        let tail = values
        while(tail.next !== null) {
            tail = tail.next
        }
        size += 1
        tail.next = value
        last = value
    
    }

    const prepend = (value) => {
        value.next = values 
        values = value
        size += 1
        head = value
    }

    const toString = () => {
        let tail = values
        let str = ""
        while(tail != null) {
            if(tail.next === null) {
                str += `( ${ tail.value } )`

            } else {
                str += `( ${ tail.value } ) -> `

            }
            tail = tail.next
        }
        console.log(str)
    }

    const index = (i) => {
        let node = values
        for(let j=0; j<i; j++){
            node = node.next
        }
        console.log(node.value)
    }

    const pop = () => {
        let tail = values
        while(tail.next !== null) {
            tail = tail.next
        }
        tail.next = null
    }

    const contains = (val) => {
        let tail = values
        while(tail.value !== val && tail.next !== null) {
            tail = tail.next
            if(tail.value === val){ return true}
        }
        return false
    }

    const find = (val) => {
        let node = values
        for(let j=0; j<size; j++){
            node = node.next
            if(node.value === val) { return j }

        }
        return null
    }

    return { append, prepend, toString, size, index, pop, contains, find, head, last}
}

let ll = LinkedList();
ll.append(new Node(1))
ll.prepend(new Node(5))
ll.prepend(new Node(6))
ll.append(new Node(1))

ll.toString()
ll.index(3)
ll.pop()
ll.toString()

console.log(ll.contains(3))

console.log(ll.find(1))
