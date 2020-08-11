export class Class1{
  prop1:string;
  prop2:number;

  constructor(p1:string, p2:number){
    this.prop1 = p1;
    this.prop2 = p2;
  }

  fire =() => {
    console.log(this.prop1, "|", this.prop2);
  }

}