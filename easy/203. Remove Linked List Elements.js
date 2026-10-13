/*Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]


    Example 2:
Input: head = [], val = 1
Output: []


    Example 3:
Input: head = [7,7,7,7], val = 7
Output: []


Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50*/


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


function createList(array) {
    let dummy = new ListNode();
    let current = dummy;

    for (let value of array) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

function printList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}


var removeElements = function(head, val) {
    let dummy = new ListNode(0, head);
    let current = dummy;
    let prev = null
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return dummy.next;
};

let list = createList([1,2,6,3,4,5,6]);

let result = removeElements(list, 6);

printList(result);