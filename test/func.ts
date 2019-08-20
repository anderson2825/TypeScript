/*//函数声明方法 
    function run(name:string) {
        console.log(name);
    }
    run("xiaoming");
*/
/*//函数传参
    function getInfo(name:string,age:number){
        let info = `${name}----${age}`;
        //console.log(info);
    }
    getInfo("json",40);
*/
/* //函数传参判断
    function getInfo2(name:string,age?:number){
        if(age){
            const info2 = `${name}----${age}`;
            //console.log(info2);
        }else{
            const info2 = `${name}----年龄未知`;
            //console.log(info2);
        }
    }
    getInfo2("json");
*/
/*  //函数剩余参数 三点运算符接收新的参数
    function getInfo3(...result:number[]):number{
        var getInfo3 = 0;
        for(var i= 0; i<result.length; i++){
            getInfo3+= result[i];
        } 
        return getInfo3;
    }
    alert(getInfo3(1,2,3,4));
    function getInfo4(a:number,b:number,...result:number[]):number{
        var sum2 = a + b;
        for(var i = 0; i<result.length; i++ ){
            sum2+=result[i];
        }
        return sum2;
    }
    alert(getInfo4(1,2,3,4,5,6));
*/
/*//函数方法重载
    // function getInfo5(name:string):string;
    // function getInfo5(age:number):string;
    // function getInfo5(str:any):any{
    //     if(typeof str ==="string"){
    //         return "name: "+str;
    //     }else{
    //         return "age: "+str;
    //     }
    // }
    // alert(getInfo5("jack"));

    function getInfo6(name:string):string;
    function getInfo6(name:string,age:number):string;
    function getInfo6(name:any,age?:any):any{
        if(age){
            return "name: "+name+" age: "+age;
        }else{
            return "name: "+ name;
        }
    }
    alert(getInfo6("nacy",18));
*/
/*//箭头函数 */
    // setTimeout(function(){
    //     alert("setTime")
    // },1000);
    setTimeout(()=>{
        alert("setTimeout")
    },1000);
