import ListNode from '../Utility/Linked List/main.js';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummyNode = new ListNode();
    let current = dummyNode;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else if (list1.val > list2.val) {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummyNode.next;
};

// create a dummy node
// also create a current node
// loop through both lists, and compare the list values, take the smaller
// one and assign to current and proceed the list

const toList = (arr) => arr.reduceRight((next, val) => new ListNode(val, next), null);
const toArray = (node) => { const res = []; while (node) { res.push(node.val); node = node.next; } return res; };

const test_case1 = mergeTwoLists(toList([1,2,4]), toList([1,3,4]));
console.log(toArray(test_case1));