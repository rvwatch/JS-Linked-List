import Node from './Node';

export default class LinkedList {

  constructor () {
    this.length = 0;
    this.head = null;
  }

shift() {
  
    if (!this.head) {
      return this.head;
    }

    let deleted = this.head;
    
    this.head = this.head.next;
    this.length--;
    return deleted;
  }

unshift(value) {
    let next = this.head;

    this.head = new Node(value);
    
    this.head.next = next;
    this.length++;
  }


  push(value) {
    if(!this.head){
      this.head = new Node(value);
      this.length++;
      return this.head;
    } 
    let newNode = new Node(value)
    let currentNode = this.head
    while(currentNode.next){
      currentNode = currentNode.next
    }
    //console.log(currentNode)
    currentNode.next = newNode;  
    this.length++; 
    return newNode;
  }

  pop() {
    if(!this.head){
      return this.head;
    }
    let popped = this.head
    this.head = null
    this.length--;
    return popped;

  }





} 