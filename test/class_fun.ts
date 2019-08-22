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

    class Person {
        name:string;
        constructor(name:string) {
            this.name = name;
            
        }
        run():string{
            return `${this.name}在运动`
        }
    }
    var p = new Person("jack");
    alert(p.run());