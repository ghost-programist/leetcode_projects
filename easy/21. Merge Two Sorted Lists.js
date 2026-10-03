/*You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


    Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


    Example 2:
Input: list1 = [], list2 = []
Output: []


    Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

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






var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy

    while(list1 != null && list2 != null){
        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next

        }
        else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 || list2
    return dummy.next
}

let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

let result = mergeTwoLists(list1, list2);

printList(result);