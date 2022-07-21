

// דוגמאות
// אם יוצרים אררגומנט אופציונלי חייבים לספק תנאי אי אפשר להישען עליו בקוד שלנו



//ערך דיפולטיבי , אם אני לא מספר פרמטר בקריאה לפונקציה היא תספק לי את מה ששמתי כארגומנט בהגדרות של הפונקציה
function getDetails(fName:string="firstName",age:number=18):string{
return `${fName} ${age}`
}
console.log(getDetails());

function sum(...restOfNum:number[]):number{
  let result:number=0
  restOfNum.forEach((item)=>{
    result+=item;
  })
return result;
}
console.log(sum(5,56,6,4,5,345,23,345,3));




21.

function getName(firstName1:string,lastName?:string):void{
  lastName?console.log(firstName1+lastName):console.log(firstName1);
}
getName("Lior");


22.
function printToLog(fullName:string,email?:any):void{
  email?console.log(fullName+email):console.log(fullName);
}
printToLog("lior dawit");

23.

function getNamesAndPrint(ageCat:number,typeCat:string,catName?:string):void{
  catName ? console.log(catName + ageCat + typeCat : console.log(ageCat+typeCat))
}
getNamesAndPrint( 12," street");

24.
function getSomeParaAndReturn(text:string,booleanArgu:boolean=false):string{
if(booleanArgu === true){
  return `Hello ${text}`;
}
else{
  return `Welcome${text}`;
}
}
console.log(getSomeParaAndReturn("lior dawit"));

25.

function getSomeNamesAndReturn(firstName1:string,lastName1:string,missText:string=" miss "):string{
return firstName1 + lastName1 + missText;
}
console.log(getSomeNamesAndReturn(" lior"," dawit"));

//NOT FINISH
26.
function printTheTextNumTimesAsArgument(someText:string,defaultNum:number=1,textOpzional?:string):void{
for(let i = 0 ; i<defaultNum;i++){
  !textOpzional?console.log(someText):console.log(`${someText}${textOpzional}`);
}
printTheTextNumTimesAsArgument("king lior",5);


}

27.
function getNumberAndSort(...caractors:string=[]):void{

}
getNumberAndSort()


function calac(num1?:number,):number{
  return num1? num1 +5 : 0 ;
}
calac(6)//11

// class Cat {
//   nameofcat: string;
//   age: number;
//   color: string;
//   private ownerName: string;
//   constructor(name_of_cat: string, age: number, color: string) {
//     this.nameofcat = name_of_cat;
//     this.age = age;
//     this.color = color;
//   }
//   get getOwnerName(): string {
//     return this.ownerName;
//   }
//   set setOwnerName(name: string) {
//     name.length < 5 ? this.ownerName = name : console.log("need at list 5 letters");

//   }
// }
// let newCatObject: Cat = new Cat("sama", 12, "blacl");
// console.log(newCatObject);


// class Cat{

//   private ownerName:string = "";

//   get getOwnerName():string{
//     return this.ownerName;
//   }
//   set setOwnerName(name:string){
//     name.length<5?this.ownerName=name:console.log("need at list 5 letters");
//   }
// }
// let newCatObject:Cat = new Cat();
// console.log(newCatObject.setOwnerName="mike");

34.
class Car {
  company: string;
  typeCar: string;
  color: string;
  constructor(company: string, typeCar: string, color: string) {
    this.company = company;
    this.typeCar = typeCar;
    this.color = color;
  }
}
35.
class Elepant {
  hight: number;
  kindOf: string;
  age: number;
  country: string;
  constructor(hight: number, kindOf: string, age: number, country: string) {
    this.hight = hight;
    this.kindOf = kindOf;
    this.age = age;
    this.country = country;
  }
   returnNames() {
    return `${this.hight}${this.kindOf}${this.age}${this.country}`
  }
}
36.
class Pants {
  size: number;
  color: string;
  fabricType: string;
  hight: number;
  isExist: boolean;
  constructor(size: number, color: string, fabricType: string, hight: number, isExist: boolean) {
    this.size = size;
    this.color = color;
    this.fabricType = fabricType;
    this.hight = hight;
    this.isExist = isExist;
  }
   returnAllDetails() {
    return `Details:${this.size}${this.color}${this.fabricType}${this.hight}${this.isExist}`;
  }
  get anotherFunction() {
    return this.returnAllDetails
  }


}
let some1: Pants = new Pants(12, "blackk", "xcv", 33, false)
console.log(some1.anotherFunction)
37.
class Sportsman {
  fullName: string;
  birthDay: number;
  sportType: string;
  gender: string = "male";
  constructor(fullName: string, birthDay: number, sportType: string, gender?: string) {
    this.fullName = fullName;
    this.birthDay = birthDay;
    this.sportType = sportType;
    this.gender = gender ? this.gender : ""
  }
   someReturnFunction() {
    return `Details: ${this.fullName}${this.birthDay}${this.sportType}${this.gender}`
  }
}

38.
class FootBaller extends Sportsman {
  team: string;
  isPlayInNationalTeam: boolean;
  constructor(fullName: string, birthDay: number, sportType: string, gender: string, team: string, isPlayInNationalTeam: boolean) {
    super(fullName, birthDay, sportType, gender)
    this.team = team;
    this.isPlayInNationalTeam = isPlayInNationalTeam;
  }
  returnAllDetails() {
    return `Details:${super.someReturnFunction}${this.team}${this.isPlayInNationalTeam}`
  }
}

39.
class User {
  fullName: string;
  age: number;
  password: string;
  private isConnect:boolean = false;
  constructor(fullName: string, age: number, password: string,isConnect:boolean) {
    this.fullName = fullName;
    this.age = age;
    this.password = password;
    this.isConnect=isConnect;
  }
  get getConnectUser(){
    return this.isConnect
  }
  set setConnected(connected:boolean){
    this.isConnect = connected;
  }

  static getSomeObjectsAndPrint(olderOrYounger:string,...numsOfUsers:User[]){
    if(olderOrYounger === "older"){
      return numsOfUsers.sort((a:User,b:User)=> b.age-a.age)[0];
    }
    else if(olderOrYounger==="young"){
      return numsOfUsers.sort((a:User,b:User)=>a.age-b.age)[0];
    }
    return;
  }
}
let user33 = new User("lior dawit",34,"lllllll",false);
let user44 = new User("cristiano ronaldo",11,"aaaaaaa",true);
console.log(User.getSomeObjectsAndPrint("young",user33,user44))

40.
class Student extends User{
  firstName:string;
  lastName:string;
  birthOfData:string;
  email:string;
  constructor(firstName:string,lastName:string,birthOfData:string,email:string,age:number,password:string){
    super(`${firstName} ${lastName}`,age,password)
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthOfData=birthOfData;
    this.email=`${this.firstName}${this.lastName}@walla.com`;
  }

   printAllDetails(){
    return `Details: ${this.firstName},${this.lastName},${this.birthOfData},${this.email},${this.password}`
  }

  returnIfConnect(){
    if(super.getConnectUser){
      return "green";
    }
    return "red";
  }
}
let some3 = new Student("lior","awit","28/03/1997","dawitlior777@gmail.com",27,"ssdsdds")
let some4 = new Student("david","dwit","28/03/1997","dawitlior777@gmail.com",21,"ssdsdds")
let some5 = new Student("ali","dawi","28/03/1997","dawitlior777@gmail.com",22,"ssdsdds")
let some6 = new Student("naor","dait","28/03/1997","dawitlior777@gmail.com",24,"ssdsdds")

console.log(Student.getSomeObjectsAndPrint("older",some3,some4,some5,some6));
41.
class Room{
  wight:number;
  higth:number;
  area:number;
  private isWindow:boolean=false;
  constructor(wight:number,higth:number,area:number,isWindow:boolean){
    this.wight=wight;
    this.higth=higth;
    this.area=wight*higth; 
    this.isWindow=isWindow
  }
  getDetails():string{
    return `Details:${this.area} There is window?${this.isWindow}`;
  }
  get isHaveWindow():boolean{
    return this.isWindow;
  }
  set setIsWindow(someBool:boolean){
   this.isWindow = someBool
  }
  static returnTheBiggestRoom(bigOrSmall:string,...roomsObj:Room[]){
    if(bigOrSmall === "small"){
     return roomsObj.sort((a:Room,b:Room)=> a.area - b.area)[0]
    }
    else if(bigOrSmall === "big"){
      return roomsObj.sort((a:Room,b:Room)=> b.area - a.area)[0]
    }
    return;
  }
}

let show11 = new Room(10,20,200,false)
let show22 = new Room(180,200,36000,true)
console.log(Room.returnTheBiggestRoom("small",show11,show22))

42.
class Kitchen extends Room{
  numberClosets:number;
  constructor(wight:number,higth:number,area:number,isWindow:boolean,numberClosets:number){
    super(wight,higth,area,isWindow);
    this.numberClosets=numberClosets;
  }
  printDetails():string{
    return `${super.getDetails()}number of closets:${this.numberClosets}`
  }
  printIfHasWindow(){
    return this.setIsWindow ? "have window" : "no have window"
  }
}

let some11 = new Kitchen(12,44,2,false,2);
let some22 = new Kitchen(33,2,3,true,3);
let some33 = new Kitchen(12,1,3,false,4);
let some44 = new Kitchen(25,1,3,true,5);

console.log(Room.returnTheBiggestRoom("small",some11,some22,some33,some44))



43.
class Salon extends Room{
    setsNumber:number;
    airFlow:string;
    constructor(wight:number,hight:number,area:number,setsNumber:number,airFlow:string){
      super(wight,hight,area)
      this.setsNumber=setsNumber;
      this.airFlow=airFlow;
    }
    returnAllDetailsSalon(){
      console.log(`${super.getDetails} Number Of Sets:${this.setsNumber}Air-Flow${this.airFlow}`);
    }
    returnIfHadAirFlow():string{
      return this.isHaveWindow ? `windows air flow${this.airFlow}`: `no have windows poor family`
    }

}

44.
 class Product{
   wight:number;
   hight:number;
   kg:number;
   price:number;
   private isHaveInvations:boolean=false;
   constructor(wight:number,hight:number,kg:number,price:number){
     this.wight = wight;
     this.hight = hight;
     this.kg = kg;
     this.price = price;
   }

   getDetails(){
     return `Details:${this.wight}${this.hight}${this.kg}${this.price}`;
   }

   get getIsHaveInvations():boolean{
     return this.isHaveInvations;
   }
   set setIsHaveInvations(someBool:boolean){
     this.isHaveInvations = someBool;
   }

   static returnExpansiveOrChip(expensiveOrChip:string="expansive",...prodoctObj:Product[]){
     if(expensiveOrChip === "expansive"){
       prodoctObj.sort((a:Product,b:Product)=> b.price - a.price)[0]
     }
     else if(expensiveOrChip === "chip"){
       prodoctObj.sort((a:Product,b:Product)=>b.price - a.price)[0]
     }
   }
 }

 45.
  class Computer extends Product{
   energyPower:number;
   constructor(wight:number,hight:number,kg:number,price:number,energyPower:number){
     super(wight,hight,kg,price);
     this.energyPower = energyPower;
   }
   getComputerDetails(){
     return `Details:${this.getDetails()} Energy-Power:${this.energyPower}`;
   }
   getMessegeInvation(){
     return this.getIsHaveInvations ? "invaited" : "need to complite invation";
   }
 }

let computer1 = new Computer(34,55,87,1400,10);
let computer2 = new Computer(33,54,80,1250,21);
let computer3 = new Computer(35,56,85,1700,30);
let computer4 = new Computer(31,59,90,2390,60);
Computer.returnExpansiveOrChip("expensive",computer1,computer2,computer3,computer4);

46.
class ComputerScreen extends Product{
   numberInvations:number;
   resolution:number;
   constructor(wight:number,hight:number,kg:number,price:number,numberInvations:number,resolution:number){
     super(wight,hight,kg,price);
     this.numberInvations = numberInvations;
     this.resolution = resolution;
   }
   printAllDetails(){
     return `Details:${this.getDetails} Number Of Invations:${this.numberInvations} Resolution :${this.resolution}`;
   }

   getMessegeAndPrintByInva(){
     return this.getIsHaveInvations ? `${this.numberInvations} is alredy send to the coustimer`:"U need to oeder";
   }
}

const show1 = new User("elada barahano",23,"eldadQewr");
const show2 = new User("lior dawit",26,"liorQewr");
show1
class Dog {
  static numberOfObjects: number = 0;
  constructor() {
    Dog.addOneDogObject
  }
  static addOneDogObject() {
    Dog.numberOfObjects++;
  }
}
