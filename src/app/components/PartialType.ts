
interface IObj{
    name:string,
    age:number,
    good:boolean
}

const myObj:IObj={
    name:"Srila Jaman",
    age:29,
    good:false
}

// Using Partial we can make all fields of IObj optional insted of using ? mark for all field,

const myObj2:Partial<IObj>={
    good:false
}

