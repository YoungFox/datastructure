
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let head = new ListNode(1)
let cur = head
for (let i = 2; i < 6; i++) {
    cur.next = new ListNode(i)
    cur = cur.next
}
console.log(JSON.stringify(head))
var removeNthFromEnd = function (head, n) {
    let map = []
    let cur = head
    let preNode = null
    while (cur) {
        map.push([preNode, cur.next])
        preNode = cur
        cur = cur.next
    }
    let len = map.length
    let index = len - n

    let item = map[index]
    if(item){
        if(!item[0]){
            head = item[1]
        }else{
            item[0].next = item[1]
        }
    }
    return head
};

console.log(JSON.stringify(removeNthFromEnd(head,-2)))