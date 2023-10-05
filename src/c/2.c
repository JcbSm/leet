/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {

    struct ListNode *head = NULL, *x, *y;
    int c = 0;
    
    while (l1 || l2 || c != 0) {

        // Allocate new node
        x = malloc(sizeof(struct ListNode));

        // Add l1 val
        if (l1) {
            c += l1->val;
            l1 = l1->next;
        }

        // Add l2 value
        if (l2) {
            c += l2->val;
            l2 = l2->next;
        }

        // Assign value to node
        x->val = c % 10;
        x->next = NULL;
        
        // Divide value by 10 to get carry
        c = c/10;

        // Set head if not already
        if (!head)
            head = x;

        // If previous value, point to
        if (y) {
            y->next = x;
        }

        // Set to last
        y = x;
    }

    return head;
     
}