/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let slowPointer = head;
    let fastPointer = head.next;

    while (slowPointer !== fastPointer) {
        if (fastPointer === null || fastPointer.next === null) {
            return false;
        }

        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return true;
};