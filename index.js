
class MyArray {
    constructor(...rest) {
        this.length = 0;
        this.push(...rest);
    }
    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }
    pop() {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }
    forEach(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
   static arrayIsArra(obj) {
        return obj instanceof MyArray;
    }
    map(fn) {
        const arr = new MyArray;
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i], i , this));
        }
        return arr;
    }
    [Symbol.iterator]() {
        let i = 0;
        return {
            next:()=> {
                return {
                    done: i > this.length - 1,
                    value: this[i++]
                }
            }
        }
    }
    flat() {     
        for (let i = 0; i < this.length; i++) {
            if(this[i] instanceof(MyArray)) {
                   this[i].flat();
                    }else{
                result.push(this[i]);
            }  
        }
        return result;
    }
}
const result = new MyArray ;
const qq = new MyArray(1,2,3,4,new MyArray(5,6,7,new MyArray(8,9,10)));
