var node = /** @class */ (function () {
    function node(data) {
        this.next = null;
        this.data = data;
    }
    return node;
}());
var CLL = /** @class */ (function () {
    function CLL() {
        this.head = null;
    }
    CLL.prototype.insert = function (data) {
        var newnode = new node(data);
        if (!this.head) {
            this.head = newnode;
            newnode.next = this.head;
        }
        else {
            var temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newnode;
            newnode.next = this.head;
        }
    };
    CLL.prototype.delete = function (data) {
        if (!this.head)
            return;
        var current = this.head;
        var prev = null;
        do {
            if (current.data === data) {
                if (prev) {
                    prev.next = current.next;
                    if (current === this.head)
                        this.head = current.next;
                }
                else {
                    if (this.head.next === this.head) {
                        this.head = null;
                        return;
                    }
                    var last = this.head;
                    while (last.next !== this.head)
                        last = last.next;
                    last.next = this.head.next;
                    this.head = this.head.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    };
    CLL.prototype.traverse = function () {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        var result = "";
        var current = this.head;
        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== this.head);
        result += "(head)";
        console.log(result);
    };
    return CLL;
}());
var list = new CLL();
list.insert(10);
list.insert(20);
list.insert(30);
list.traverse();
list.delete(20);
list.traverse();
