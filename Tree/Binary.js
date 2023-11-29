//node has vale and right and left edgs
class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;
    }
}

class BSTree{
    constructor(){
        this.root=null;//root node

    }
    isEmpaty(){
        return this.root===null;
    }
}

const BST=new BSTree();
