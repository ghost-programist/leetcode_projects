/*Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


    Example 1:
Input: head = [1,1,2]
Output: [1,2]


    Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]


    Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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




var deleteDuplicates = function(head) {

    if (head === null) {
        return head;
    }

    let current = head.next;
    let prev = head;
    while (current !== null) {
        if(prev.val == current.val) {
            prev.next = current.next;
        }else{
            prev = current;

        }
        current = current.next;

    }
    return head;
};

let list = createList([1,1,2]);

let result = deleteDuplicates(list);

printList(result);