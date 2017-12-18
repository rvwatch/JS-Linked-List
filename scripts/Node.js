export default class Node {

  constructor (name) {
    this.data = name;
    this.next = null;
  }

  next(head) {
    this.next = head;
  }

}
