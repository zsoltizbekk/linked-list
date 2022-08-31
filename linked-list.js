class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let current = this.head;
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.size++;
    }
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  sizeF() {
    console.log(`list length is: ${this.size}`);
  }

  headF() {
    console.log(`the first value is: ${this.head.value}`);
  }

  tailF() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log(`the last value is: ${current.value}`);
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index");
      return;
    } else {
      let current = this.head;
      let temp = 0;
      if (index === 0) {
        console.log(`the asked value is: ${current.value}`);
      }
      while (temp != index) {
        temp++;
        current = current.nextNode;
      }
      console.log(`the asked value is: ${current.value}`);
    }
  }

  insertAt(data, index) {
    if (index < 0) {
      console.log("index cannot be minus!");
    } else if (index === 0) {
      this.prepend(data);
    } else if (this.size < index) {
      console.log("error, wrong index");
    } else {
      let temp = 0;
      let current = this.head;
      let previous;
      while (temp != index) {
        temp++;
        if (temp == index) {
          previous = current;
        }
        current = current.nextNode;
      }
      previous.nextNode = new Node(data, current);
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index");
      return;
    } else {
      let current = this.head;
      let temp = 0;
      let previuos;
      if (index === 0) {
        this.head = this.head.nextNode;
      } else {
        while (temp != index) {
          temp++;
          previuos = current;
          current = current.nextNode;
        }
        previuos.nextNode = current.nextNode;
        this.size--;
      }
    }
  }

  pop() {
    let current = this.head;
    let previous;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let b = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        b = true;
      }
      current = current.nextNode;
    }
    b
      ? console.log(`${value} is in the list!`)
      : console.log(`${value} is NOT in the list!`);
  }

  find(value) {
    let index = null;
    let current = this.head;
    let temp = 0;
    while (current) {
      if (current.value === value) {
        index = temp;
        console.log(`found the value at ${temp}`);
        return;
      }
      temp++;
      current = current.nextNode;
    }
    console.log(`could not found the value`);
    return null;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  toString() {
    let current = this.head;
    let temp = "";
    while (current) {
      temp += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    temp += "null";
    console.log(temp);
  }
}

const ll = new LinkedList();
