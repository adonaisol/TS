class BaseClass {
    constructor(public width:number,public length:number){

    }
    calSize(){
        return this.width* this.length;
    }
}
var rectangle=new BaseClass(2,3);
console.log(rectangle.calSize());