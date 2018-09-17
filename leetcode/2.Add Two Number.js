
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 方法1
 */
var addTwoNumbers = function (l1, l2) {
    // var tmp 
    var tmpVal = 0;
    var i = 0;
    var r = 0;
    var val1 = l1.val || 0;
    var val2 = l2.val || 0;
    tmpVal = val1 + val2;
    i = Math.floor(tmpVal / 10);
    r = tmpVal % 10;


    var tmpList = new ListNode(r);

    if (l1.next || l2.next || i) {
        if (l1.next) {
            l1.next.val += i;
        } else if (l2.next) {
            l2.next.val += i;
        } else {
            l1.next = { val: 1, next: null }
        }
        tmpList.next = addTwoNumbers(l1.next || {}, l2.next || {});
    }
    return tmpList;
    // console.log(new ListNode(1,2));

};

var list1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
var list2 = { val: 2, next: { val: 3, next: { val: 7, next: null } } };

console.log(JSON.stringify(addTwoNumbers(list1,list2)));