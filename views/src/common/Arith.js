"use strict";

import Common from "./Common.js";

class Arith {

    constructor(type){
        this.t = type;
        this.ariObj = {"del": this.delRepeat};
    }

    test (){

    }

    delRepeat(arr) {
        let newArray = new Array();
        for (let i = 0; i <arr.length; i ++) {
            for (let j = i + 1; j < arr.length; j ++) {
                if (arr[i] == arr[j]) {
                    i ++;
                }
            }
            newArray.push(arr[i]);
        }
        return newArray;
    }

    operate(arr) {
        if (this.ariObj.del.hasOwnProperty(this.type) || this.ariObj.del === null) {
            console.log("没有方法！");
        }
        var fun = this.ariObj[this.t];
        return fun(arr);
    }
}

module.exports = Arith;


