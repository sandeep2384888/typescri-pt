"use strict";
var LinkNode = /** @class */ (function () {
    function LinkNode(nodeValue, nodeReference) {
        this.value = nodeValue;
        this.nextNode = nodeReference;
    }
    return LinkNode;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this._length = 0;
    }
    LinkList.prototype.insertLink = function (i) {
        if (this.list == null) {
            this.list = new LinkNode(i, null);
            this._length++;
            return true;
        }
        else {
            var temp = this.list;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new LinkNode(i, null);
            this._length++;
            return false;
        }
    };
    LinkList.prototype.printLinkList = function () {
        var temp = this.list;
        if (this.list == null) {
            console.log('empty linked list');
        }
        else {
            while (temp.nextNode != null) {
                console.log(temp.value);
                temp = temp.nextNode;
            }
            //to show last element
            console.log(temp.value);
        }
    };
    //last occurrence of a given number
    LinkList.prototype.searchNodeByValue = function (i) {
        var temp = this.list;
        var counter = 1;
        var position = null;
        if (temp == null) {
            console.log('empty list');
        }
        else {
            while (temp.nextNode != null) {
                if (temp.value === i) {
                    position = counter;
                }
                counter++;
                temp = temp.nextNode;
            }
            //check if the  last element of the node
            if (temp.value === i) {
                position = counter;
            }
        }
        //console.log(position);
        if (position == null) {
            return 0;
        }
        else {
            return position;
        }
    };
    LinkList.prototype.removeListItemByValue = function (i) {
        if (this.list == null) {
            return true;
        }
        else {
            var itemPosition = this.searchNodeByValue(i);
            if (itemPosition == 0) {
                return true;
            }
            else {
                var temp = this.list;
                //if its the first element in the stack
                if (itemPosition == 1) {
                    this.list = this.list.nextNode;
                    return true;
                }
                //if the element is not first or last
                while (temp.nextNode.value != i) {
                    console.log('in here');
                    temp = temp.nextNode;
                }
                temp.nextNode = temp.nextNode.nextNode;
            }
            return true;
        }
    };
    LinkList.prototype.removeListItemByPos = function (i) {
        var temp = this.list;
        var counter = 1;
        if (i > this._length)
            return false;
        if (i == 1) {
            this.list = this.list.nextNode;
            return true;
        }
        while (counter != (i - 1)) {
            temp = temp.nextNode;
            counter++;
        }
        temp.nextNode = temp.nextNode.nextNode;
    };
    LinkList.prototype.toString = function () {
        var current = this.list;
        var str = '';
        while (current) {
            str += current.value; //output is undefinedundefinedundefined
            // str += JSON.stringify(current);
            // prints out {"next":{"next":{}}}{"next":{}}{}
            current = current.nextNode;
        }
        return str;
    };
    return LinkList;
}());
var obj1 = new LinkList();
obj1.insertLink(1);
obj1.insertLink(2);
obj1.insertLink(3);
obj1.insertLink(4);
obj1.removeListItemByPos(4);
obj1.insertLink(5);
console.log(obj1.toString());
