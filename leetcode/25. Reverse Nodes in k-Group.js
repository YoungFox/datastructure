/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = null
let cur = null
head = new ListNode(0)
cur = head
for (let i = 1; i < 5; i++) {
    cur.next = new ListNode(i)
    cur = cur.next
}
var reverseKGroup = function (head, k) {
    if (k <= 1) {
        return head
    }
    let tmpHead = head
    let list = []
    while (tmpHead) {
        list.push(tmpHead)
        tmpHead = tmpHead.next
    }
    let newHead = null
    let tmpPointer = null
    let len = list.length
    if(k > len){
        return head
    }
    let j = k - 1
    for (; j < len; j = j + k) {
        let x = j
        while (x > j - k) {
            if (!tmpPointer) {
                newHead = tmpPointer = list[x]
            } else {
                tmpPointer.next = list[x]
                tmpPointer = tmpPointer.next
            }
            x--
        }

        if (j + k >= len && j != len - 1) {
            tmpPointer.next = list[j + 1]
            while(tmpPointer.next){
                tmpPointer = tmpPointer.next
            }
        }
    }
    if (tmpPointer) {
        tmpPointer.next = null
    }

    return newHead
    // console.log(list)
};

// console.log(reverseKGroup(head, 2))
console.log(JSON.stringify(reverseKGroup(head, 5)))
