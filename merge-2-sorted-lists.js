/**
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
    push(val){
     if(!this.val)  return this.val = val;
     if(!this.next) return this.next = new Node(val);
     
     const addToTail = (node,val) => {
         if(!node.next) return node.next = new Node(val);
         addToTail(node.next, val);
     };

     addToTail(this,val);
     return this;
    }
}

const mergeTwoLists = function(l1, l2) {
    const newNode = new Node(null);
    if(!l1 && !l2) return null;
    const sort = (node1,node2, newNode) => {
        if(node2 && !node1) {
            newNode.next = node2;
            return newNode;
        }

         if(node1 && !node2) {
             newNode.next = node1;
            return newNode;
        }
        const val1 = node1.val;
        const val2 = node2.val;
        if(val1 >= val2){
            newNode.next = node2;
            return sort(node1, node2.next,newNode.next);
        }else{
            newNode.next = node1;
            return sort(node1.next, node2, newNode.next);
        }
    }

    sort(l1,l2,newNode);
    return newNode.next;
};

const l1 = new Node(null);
l1.push(-9);
l1.push(3);


const l2 = new Node(null);
l2.push(5);
l2.push(7);

const result = mergeTwoLists(l1,l2);
console.log('result---',JSON.stringify(result));
