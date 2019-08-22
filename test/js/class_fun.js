"use strict";
// class Person{
//     name:string;
//     constructor( name:string ){  //构造函数 实例化雷达时候触发的方法
//         this.name = name;
//     }
//     getName():string{
//         return this.name;
//     }
//     setName(name:string):void{
//         this.name = name;
//     }
// }
// var p  = new Person("jack");
// alert(p.getName());
// p.setName("json");
// alert(p.getName());
//ts中实现继承 extends、super
// class Person {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var p = new Person("jack");
// alert(p.run());
// class web extends Person {
//     constructor(name:string) {
//         super(name) //初始化父类的构造函数
//     }
//     run():string{
//         return `${this.name} 在工作子类`
//     }
//     work():string{
//         return `${this.name} 在工作`
//     }
// }
// var w = new web("json");
// alert(w.run());
//alert(w.work());
//3 类里面的修饰符 typescript里面定义了3种修饰符
/*
    1 public :公有              在类里面、子类、类外面都可以 访问
    2 protected:保护类型        在类里面、子类可以 访问；类外面不可以访问
    3 private:私有              在类里面可以访问，子类，类外面不可以访问
    如果属性不加修饰符，默认就是公有的 public
*/
// class Person {
//     public name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string{
//         return `${this.name} 在跑步`
//     }
// }
// class Web extends Person{
//     constructor(name:string){
//         super(name);
//     }
//     run():string{
//         return `${this.name} 在跑步的子类`
//     }
//     work():string{
//         return `${this.name} 在工作`
//     }
// }
// var wa = new Web("jack");
// alert(wa.run());
// var pa = new Person("niay");
// alert(pa.name);
// class Person {
//     protected name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string{
//         return `${this.name} 在work`
//     }
// }
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     run():string{
//         return `${this.name} 在跑步中`
//     }
// }
// var runa = new Web("nacy");
// alert(runa.run());
// class Person {
//     private name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string{
//         return `${this.name} 在work`
//     }
// }
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// var runa = new Web("nacy");
// alert(runa.run());
