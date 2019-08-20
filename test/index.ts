function getData() { };
/* 布尔类型*/
    var falsg: boolean = true;
/* 数字类型*/
    var nums: Number = 8;
/* 字符串类型*/
    var str: String = "hello ts";
/* 数组类型*/
    var arr:Number[] = [1,23,4,56];
    var arrnum: Array<number> = [4, 5, 6, 7]; 
    var arrany:any[] = ["hello",331,null,undefined];
    console.log(arrany);
/* 元祖类型 tuple*/
    var arrmany:[number,string] = [12,'string hello'];
    console.log(arrmany);
/* 枚举类型(enum)*/
    enum Color { blur, red, 'orange' };
    let c:Color = Color.red;
    // console.log(c);
    enum Errary {'undefined' = -1, 'null' = -2, 'success' = 1};
    let errb = Errary.null;
    //console.log(errb);
/* 任意类型 any*/
    var oBox: any = document.getElementById("Box");
    oBox.style.color = 'red';
/* null,undefined类型*/
    var num:number | undefined;
    num = 25;
    // console.log(num);
/*void类型 用于没有返回任何值*/
    function runs():void{
        console.log("void");
    }
    runs();
/*never 类型，包含null, undefined子类型代表从不会出现的值*/ 
/*never的变量只有never类型才能使用*/
    // var ad:never;
    // ad = (()=>{
    //     throw new Error("error");
    // })();
