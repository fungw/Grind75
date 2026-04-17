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
var reverseList = function(current) {
    if (current === null) {
        return current;
    }

    if (current.next === null) {
        return current;
    }
    const nextNode = reverseList(current.next);
    current.next.next = current;
    current.next = null;
    return nextNode;
};