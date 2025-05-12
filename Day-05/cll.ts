class node {
  data: number;
  next: node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class CLL {
  head: node | null = null;

  insert(data: number): void {
    const newnode = new node(data);
    if (!this.head) {
      this.head = newnode;
      newnode.next = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next!;
      }
      temp.next = newnode;
      newnode.next = this.head;
    }
  }

  delete(data: number): void {
    if (!this.head) return;

    let current = this.head;
    let prev: node | null = null;

    do {
      if (current.data === data) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
        } else {
          if (this.head.next === this.head) {
            this.head = null;
            return;
          }
          let last = this.head;
          while (last.next !== this.head) last = last.next!;
          last.next = this.head.next;
          this.head = this.head.next;
        }
        return;
      }
      prev = current;
      current = current.next!;
    } while (current !== this.head);
  }

  traverse(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let result = "";
    let current = this.head;
    do {
      result += current.data + " -> ";
      current = current.next!;
    } while (current !== this.head);
    result += "(head)";
    console.log(result);
  }
}

const list = new CLL();
list.insert(10);
list.insert(20);
list.insert(30);
list.traverse();

list.delete(20);
list.traverse();
