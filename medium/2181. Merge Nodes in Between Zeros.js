/*2181. Merge Nodes in Between Zeros
Medium
Topics
premium lock icon
Companies
Hint
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.



Example 1:


Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation:
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
Example 2:


Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation:
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.
 */



//  let arr = [];
//  let f = false;
//  let sum = 0;
//
//  for (let i = 0; i <= head.length; i++) {
//    if (head[i] == 0 && f == false) {
//      f = true;
//    } else if (head[i] == 0 && f == true) {
//      arr.push(sum);
//
//      sum = 0;
//    } else if (head[i] >= 1 && f == true) {
//      sum += head[i];
//    }
//  }
//
//  return arr;
  function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }

  const head = new ListNode(0, new ListNode(3, new ListNode(1, new ListNode(0, new ListNode(4, new ListNode(5, new ListNode(2, new ListNode(0)
                )
              )
            )
          )
        )
      )
    );


var mergeNodes = function(head) {

  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

console.log(mergeNodes([0,3,1,0,4,5,2,0]));