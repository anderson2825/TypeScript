"use strict";
function getData() { }
;
/* 布尔类型*/
var falsg = true;
/* 数字类型*/
var nums = 8;
/* 字符串类型*/
var str = "hello ts";
/* 数组类型*/
var arr = [1, 23, 4, 56];
var arrnum = [4, 5, 6, 7];
var arrany = ["hello", 331, null, undefined];
console.log(arrany);
/* 元祖类型 tuple*/
var arrmany = [12, 'string hello'];
console.log(arrmany);
/* 枚举类型(enum)*/
var Color;
(function (Color) {
    Color[Color["blur"] = 0] = "blur";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
;
var c = Color.red;
// console.log(c);
var Errary;
(function (Errary) {
    Errary[Errary["undefined"] = -1] = "undefined";
    Errary[Errary["null"] = -2] = "null";
    Errary[Errary["success"] = 1] = "success";
})(Errary || (Errary = {}));
;
var errb = Errary.null;
//console.log(errb);
/* 任意类型 any*/
var oBox = document.getElementById("Box");
oBox.style.color = 'red';
/* null,undefined类型*/
var num;
num = 25;
// console.log(num);
/*void类型 用于没有返回任何值*/
function runs() {
    console.log("void");
}
runs();
/*never 类型，包含null, undefined子类型代表从不会出现的值*/
/*never的变量只有never类型才能使用*/
// var ad:never;
// ad = (()=>{
//     throw new Error("error");
// })();
