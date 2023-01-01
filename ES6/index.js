// const planet = "Earth"
// console.log(planet.includes("h"));
// console.log(planet.includes("earth1"));

// console.log(planet.search("art")); // search first  instance of string in the string

//! Symbol
// const id = Symbol();

// const courseInfo = {
//     title:"Javascript",
//     topics : ["Javascrip","ARRAYS","objects"],
//     id : "jscourse"
// }

// courseInfo[id] = 4123;

// console.log(courseInfo); //we will not get into naming conflicts if we use symbol\


//!Maps //map will return items in the sequence in which they were added unlike object

// let course = new Map();

// course.set("react",{description:"ui"});
// course.set("jest",{description:"testing"});

// console.log(course.get("react"))

// course.forEach(function(courseInfo){
//     console.log(courseInfo);
// })


//!sets each value is unique

// let books = new Set();
// books.add("Agatha Chrisyie");
// books.add("Chrisyie");

// console.log(books);
// console.log(books.size);
// console.log(books.has("Oliver twist"));

// //*use forEach to iterate


//! Spread Operator

// let cats = ["buiscuit","hello"]
// let  dogs = ["nero","hello"] 

// let animals = ["Smoky",...cats,...dogs]
// console.log(animals);


//!Destructuring
// let Cities = ["Delhi","agra","heluston"];

// let [first,second] = Cities
// console.log(first,second);
// //!includes
// console.log(Cities.includes("agra"))



//!object literals
// function skier(name,sound){
//     return {
//         name,
//         sound,
//         powderYell: function (){
//             let yell = this.sound;
//             console.log(`${yell}`)
            
//         }
//     };
// }

// console.log(skier);

// skier("sendy","yeah").powderYell();


//! object Spread
// const daytime ={
//     breakfast:"oatmeal"
// }
// const nighttime = "chicken";
// const s = {
//     ...daytime,
//     nighttime
// }

// const vacation = {
//     dest: "chile",
//     traveller : 2,
//     activity:"skiing"
// }

// function marketing({dest,activity}){
//     return `come to ${dest}, ${activity}`
// }

// console.log(marketing(vacation))


//! for of
// for(let letter of "javascript"){ // iterates each item of array/map
//     console.log(letter);
    
// }

//!classes
// class Vehicle{
//     constructor(description,wheels){
//         this.description = description;
//         this.wheels =   wheels;

//     }

//     describeyourself(){
//         console.log(`I am a ${this.description} with ${this.wheels} wheels`);
        
//     }
// }


// const cool_van  = new Vehicle("Cool van" , 3);
// cool_van.describeyourself();

// class semiTruck extends Vehicle{
//     constructor(){
//         super("semi Truck",18)
//     }
// }

// let griceryStore = new semiTruck();
// griceryStore.describeyourself();


//*getter and setter functions
// let attendence = {
//     _list: [],
//     set addName(name){
//         this._list.push(name);
//     },
//     get list(){
//         return this._list.join(",");
//     }
// }

// attendence.addName = "Sanchit Sah"
// console.log(attendence.list);

// class Hike {
//     constructor(dist,pace){
//         this.dist = dist;
//         this.pace = pace;
//     }
//     get lengthInHours(){
//         return `${this.calcLength()} hours`
//     }
//     calcLength(){
//         return this.dist/this.pace
//     }
// }

// const newHike = new Hike(10,20);
// console.log(newHike.calcLength());


//! repeat in string

// let yell = "woo";

// let party =yell.repeat(20);
// console.log(party)

//! default

// function add(x=5,y=6){
//     console.log(x+y);
    
// }

// add(y=3)


//! generator

// function* director(){
//     yield "three"
//     yield "two"
//     yield "one"
//     yield "action"
// }
// // returns multiple things

// // next will take us to next yield
// let countdown = director()
// console.log(countdown.next());
// console.log(countdown.next());
// console.log(countdown.next());


//! promises

// waiting going on
const delay = (seconds)=>
    new Promise((resolve,reject)=>{
        if(typeof seconds !== "number"){
            reject(
                new Error("seconds must be a number")
            )
        }
        setTimeout(resolve,seconds*1000)
    })

    console.log("zero seconds");
    delay(2).then(()=>{console.log("a")})
