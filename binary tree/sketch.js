var tree;
function setup(){
    noCanvas();
    tree = new Tree();
    for(var i = 0; i < 10; i++){
        tree.addValue(Math.floor(Math.random() * 100))
    }
    console.log(tree)
    tree.traverse();
}


class Tree{
    constructor(){
        this.root = null;
    }
    
    addValue(val){
        const n = new Node(val)
        if(this.root == null){
            this.root = n;
        }else{
           this.root.addNode(n)
        }
    }
    
    traverse(){
        this.root.visit();
    }
    
    search(val){
        const found = this.root.search(val)
        return found
    }
}


class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null
    }
    addNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n;
            }else{
                this.left.addNode(n)
            }
        }else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
            }else{
                this.right.addNode(n)
            }
        }
    }
    visit(){
        if(this.left != null){
            this.left.visit();
        }
        console.log(this.value);
        if(this.right != null){
            this.right.visit();
        }
        
    }
    search(val){
        if(this.value == val){
            console.log("found " + val);
            return this;
        }else if(val < this.value && this.left != null){
            return this.left.search(val)
        }else if(val > this.value && this.right != null){
            return this.right.search(val)
        }
        return null
    }
}


