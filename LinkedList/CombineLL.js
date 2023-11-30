var mergeTwoLists = function(list1, list2) {

    let dummy=new ListNode();
    const curr=dummy;
    while(list1 && list2){
        if(list1.val<list2.val){
            dummy.next=list1//store and data in dummy list push data node 
            list1=list1.next //next to the second data
        }else{
            dummy.next=list2;
            list2=list2.next;
        }
        dummy=dummy.next;

    }
    if(list1){
        dummy.next=list1;
    }

     if(list2){
        dummy.next=list2;
    }
    return curr.next;
};