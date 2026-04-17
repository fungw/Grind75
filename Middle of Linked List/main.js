/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (!head.next) return head;
    let currentNode = head.next;
    let middleNode = head.next;

    while (currentNode.next && currentNode.next.next) {
        middleNode = middleNode.next;
        currentNode = currentNode.next.next;
    }

    return middleNode;
};

// keep traversing currentNode until the end
// while traversing, keep track of middle node by going 