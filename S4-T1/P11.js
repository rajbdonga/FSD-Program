// Was to create a class named person by assigning name and age
// create 2 objects and a method named elder if this class
// gate the elder person and print there details on console

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    elder(p){
        if(this.age>p1.age){
            console.log("Name: "+this.name+" Age: "+this.age+" is elder");
        }
        else{
            console.log("Name: "+p.name+" Age: "+p.age+" is not elder");
        }
    }         
}
let p1=new person("Rahul",20);
let p2=new person("Rohan",30);
p1.elder(p2);



// Create a time class having three values hours , 
// minutes , seconds. create a function sum that 
// adds 2 time objects and gives result and hours ,
// minutes and seconds

class Time{
    constructor(hours,minutes,seconds){
        this.hours=hours;
        this.minutes=minutes;
        this.seconds=seconds;
        }
    sum(t){
        let totalSeconds = (this.hours * 3600) + (this.minutes * 60
            + this.seconds) + (t.hours * 3600) + (t.minutes *
                60 + t.seconds);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        return hours + ":" + minutes + ":" + seconds;
    }
}
let t1=new Time(1,2,3);
let t2=new Time(4,5,6);
console.log(t1.sum(t2));
