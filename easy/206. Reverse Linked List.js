/*Given the head of a singly linked list, reverse the list, and return the reversed list.


    Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


    Example 2:
Input: head = [1,2]
Output: [2,1]


    Example 3:
Input: head = []
Output: []


Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 */

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
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






var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;

        current = next;

    }
    return prev;
};

let list = createList([1,2,3,4,5]);

let result = reverseList(list);

printList(result);