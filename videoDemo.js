// class Node {
//     constructor(val) {
//         this.val = val;
//         this.children = [];
//     }
// }

// let amy = new Node('amy')
// let bob = new Node('bob')
// let barb = new Node('barb')
// let barry = new Node('barry')

// amy.children.push(bob);
// amy.children.push(barb);
// amy.children.push(barry);

// amy
// Node {val: 'amy', children: Array(3)}
// children: Array(3)
// 0: Node {val: 'bob', children: Array(0)}
// 1: Node {val: 'barb', children: Array(0)}
// 2: Node {val: 'barry', children: Array(0)}
// length: 3
// [[Prototype]]: Array(0)
// val: "amy"
// [[Prototype]]: Object

/*****************************************************
                                                     * 
 FINDING A NODE "Depth First Search" (Uses Stack)    *
                                                     *    
 *****************************************************/

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    findDFS(val) {
        const toVisistStack = [this];
        while (toVisistStack.length) {
            const current = toVisistStack.pop();

            console.log('Depth First VISITING:', current.val) // this console.log will show the place that is visiting to find the node

            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisistStack.push(child)
            }
        }
    }

    /*****************************************************
                                                         * 
     FINDING A NODE "Breadth First Search" (Uses Queue)  *
                                                         *    
    *****************************************************/
    findBFS(val) {
        const toVisistQueue = [this];
        while (toVisistQueue.length) {
            const current = toVisistQueue.shift();

            console.log('VISITING:', current.val) // this console.log will show the place that is visiting to find the node

            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisistQueue.push(child)
            }
        }
    }
}

let htmlEl = new Node('html', [
    new Node('head', [new Node('title')]),
    new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])])
]);

htmlEl.findDFS('add element to be found')
htmlEl.findBFS('add element to be found')

/**
 * htmlEl.find('li')
Node {val: 'li', children: Array(0)}
children: []
val: "li"
[[Prototype]]: Object
htmlEl.find('li2')
Node {val: 'li2', children: Array(0)}
children: []
val: "li2"
[[Prototype]]: Object
htmlEl.find('body')
Node {val: 'body', children: Array(1)}
children: Array(1)
0: Node {val: 'ul', children: Array(2)}
length: 1
[[Prototype]]: Array(0)
val: "body"
[[Prototype]]: Object
htmlEl.find('ul')
Node {val: 'ul', children: Array(2)}
children: Array(2)
0: Node {val: 'li', children: Array(0)}
1: Node {val: 'li2', children: Array(0)}
length: 2
[[Prototype]]: Array(0)
val: "ul"
[[Prototype]]: Object
 */