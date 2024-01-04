//node has vale and right and left edgs
class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BSTree{
    constructor(){
        this.root=null;//root node
    }
    //add new data in tree
    insertNode(value){
        let newNode=new Node(value);
        if(this.isEmpaty()){
            this.root=newNode;
        }else{
              this.insert(this.root,newNode)
        }
    }
    insert(root,newNode){
       //check child is exist 
       //value is less then root value insert at left
        if(newNode.value < root.value)
        {
            if(root.left==null){ //check root of left is empty or not if empty then set value as a left node
                root.left=newNode;
            }else{
                 //recursive call
                 this.insert(root.left,newNode); 
            }
        }else{//value is greater then root node
            if(root.right===null){ //check root of right is empty or not if empty then set value as a right node
                root.right=newNode;
            }else{
                 //recursive call
                 this.insert(root.right,newNode); 
            }
        }
    }

    find(root,value){
        console.log(root,value);
        if(!root){
            return false;
        }
        else{
            if(root.value===value){
                return true;
            }
            else if(value <root.value)//find in left
            {
                return this.find(root.left,value)//root.left is new root
            }else{
                return this.find(root.right,value);
            }
        }
    }

    isEmpaty(){
        return this.root===null;
    }
}

let BST=new BSTree();
BST.insertNode(100);
BST.insertNode(50);
BST.insertNode(200);
// BST.find(200);
console.log(BST.find(BST.root,100));