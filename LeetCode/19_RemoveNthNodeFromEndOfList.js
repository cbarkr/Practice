/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let currNode = head;
    
    // Get list length
    while (currNode != null){
        currNode = currNode.next;
        len++;
    }
    
    if (len == n){ return head.next; }
    
    // Find node to remove
    let removeNode = len - n;
    
    // Reset current node to head
    currNode = head;
    
    // Iterate to node we wish to remove
    for (let i = 1; i < removeNode; i++){
        currNode = currNode.next;
    }
    
    // Remove node
    currNode.next = currNode.next.next;
    
    return head;
};
