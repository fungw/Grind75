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
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

test_case1_list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
test_case1_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

test_case2_list1 = new ListNode(1);
test_case2_list2 = new ListNode(2);

test_case3_list1 = new ListNode(5);
test_case3_list2 = new ListNode(1, new ListNode(2, new ListNode(4)));

console.log(mergeTwoLists(test_case1_list1, test_case1_list2));
// console.log(mergeTwoLists(test_case2_list1, test_case2_list2));
// console.log(mergeTwoLists(test_case3_list1, test_case3_list2));

    // Attempt #2
    // var result = new ListNode();
    // var curr = result;

    // while (list1 && list2) {
    //     if (list1.val > list2.val) {
    //         curr.next = list2;
    //         list2 = list2.next;
    //     } else {
    //         curr.next = list1;
    //         list1 = list1.next;
    //     }
    //     curr = curr.next;
    // }

    // curr = list1 || list2;

    // return result.next;

    // Attempt #1
    // var currentList1Node = list1;
    // var currentList2Node = list2;

    // debugger;

    // while (currentList1Node && currentList2Node) {
    //     if (currentList2Node.val > currentList1Node.val) {
    //         if (currentList1Node.next === null) {
    //             currentList1Node.next = currentList2Node;
    //             return list1;
    //         }
    //         currentList1Node = currentList1Node.next;
    //     } else if (currentList2Node.val == currentList1Node.val) {
    //         var tempNode = new ListNode(currentList2Node.val);
    //         tempNode.next = currentList1Node.next;
    //         currentList1Node.next = tempNode;
    //         currentList2Node = currentList2Node.next;
    //     } else if (currentList2Node.val < currentList1Node.val) {
    //         var tempNode = new ListNode(currentList2Node.val);
    //         tempNode.next = currentList1Node;
    //         list1 = tempNode;
    //         currentList2Node = currentList2Node.next;
    //     }
    // }
    // return list1;

    // if (list1?.next === undefined) {
    //     return list2;
    // } else if (list2?.next === undefined) {
    //     return list1;
    // }
    // if (list1.next === null && list2.next === null) {
    //     if (list1.val < list2.val) {
    //         list1.next = list2;
    //         return list1;
    //     } else {
    //         list2.next = list1;
    //         return list2;
    //     }
    // }

    // var tempNode1 = list1;
    // var tempNode2 = list2;

    // debugger;

    // while(tempNode2.val !== null) {
    //     if (tempNode2.val == tempNode1.val) {
    //         const tempNode = Object.assign({}, tempNode2);
    //         tempNode.next = tempNode1.next;
    //         tempNode1.next = tempNode;

    //         // Traverse tempNode1
    //         if (tempNode1.next !== null) {
    //             tempNode1 = tempNode1.next;
    //         } else {
    //             break;
    //         }

    //         // Traverse tempNode2
    //         if (tempNode2.next !== null) {
    //             tempNode2 = tempNode2.next;
    //         } else {
    //             break;
    //         }
    //     } else if (tempNode1.next && tempNode2.val < tempNode1.next.val && tempNode2.val > tempNode1.val) {
    //         const tempNode = Object.assign({}, tempNode2);
    //         tempNode.next = tempNode1.next;
    //         tempNode1.next = tempNode;

    //         // Traverse tempNode1
    //         if (tempNode1.next !== null) {
    //             tempNode1 = tempNode1.next;
    //         } else {
    //             break;
    //         }

    //         // Traverse tempNode2
    //         if (tempNode2.next !== null) {
    //             tempNode2 = tempNode2.next;
    //         } else {
    //             break;
    //         }
    //     } else {
    //         // Traverse tempNode1
    //         if (tempNode1.next !== null) {
    //             tempNode1 = tempNode1.next;
    //         } else if (tempNode2.next !== null) {
    //             tempNode2 = tempNode2.next;
    //         }
    //     }
    // }

    // return list1;


    // var currentList2Node = list2;
    // var currentList1Node = list1;
    // while (currentList2Node.next !== null || currentList1Node.next !== null) {
    //     const tempNode = Object.assign({}, currentList2Node);
    //     if (currentList2Node.val == currentList1Node.val) {
    //         currentList2Node = currentList2Node.next;

    //         tempNode.next = currentList1Node.next;
    //         currentList1Node.next = tempNode;
    //     } else if (currentList2Node.val > currentList1Node.val && (currentList1Node.next && currentList2Node.val < currentList1Node.next.val)) {
    //         currentList2Node = currentList2Node.next;

    //         tempNode.next = currentList1Node.next;
    //         currentList1Node.next = tempNode;

    //         currentList1Node = currentList1Node.next;
    //     } else {
    //         currentList1Node = currentList1Node.next;
    //     }
    // }

    // if (currentList1Node.val < currentList2Node.val) {
    //     currentList2Node.next = currentList1Node;
    // } else {
    //     currentList1Node.next = currentList2Node;
    // }

    // return list1;