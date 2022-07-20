//דוגמאות
//אם יוצרים אררגומנט אופציונלי חייבים לספק תנאי אי אפשר להישען עליו בקוד שלנו



// //ערך דיפולטיבי , אם אני לא מספר פרמטר בקריאה לפונקציה היא תספק לי את מה ששמתי כארגומנט בהגדרות של הפונקציה
// function getDetails(fName:string="firstName",age:number=18):string{
// return `${fName} ${age}`
// }
// console.log(getDetails());

// function sum(...restOfNum:number[]):number{
//   let result:number=0
//   restOfNum.forEach((item)=>{
//     result+=item;
//   })
// return result;
// }
// console.log(sum(5,56,6,4,5,345,23,345,3));




// 21.

// function getName(firstName1:string,lastName?:string):void{
//   lastName?console.log(firstName1+lastName):console.log(firstName1);
// }
// getName("Lior");


// 22.
// function printToLog(fullName:string,email?:any):void{
//   email?console.log(fullName+email):console.log(fullName);
// }
// printToLog("lior dawit");

// 23.

// function getNamesAndPrint(ageCat:number,typeCat:string,catName?:string):void{
//   catName ? console.log(catName + ageCat + typeCat : console.log(ageCat+typeCat))
// }
// getNamesAndPrint( 12," street");

// 24.
// function getSomeParaAndReturn(text:string,booleanArgu:boolean=false):string{
// if(booleanArgu === true){
//   return `Hello ${text}`;
// }
// else{
//   return `Welcome${text}`;
// }
// }
// console.log(getSomeParaAndReturn("lior dawit"));

// 25.

// function getSomeNamesAndReturn(firstName1:string,lastName1:string,missText:string=" miss "):string{
// return firstName1 + lastName1 + missText;
// }
// console.log(getSomeNamesAndReturn(" lior"," dawit"));

// //NOT FINISH
// 26.
// function printTheTextNumTimesAsArgument(someText:string,defaultNum:number=1,textOpzional?:string):void{
// for(let i = 0 ; i<defaultNum;i++){
//   !textOpzional?console.log(someText):console.log(`${someText}${textOpzional}`);
// }
// printTheTextNumTimesAsArgument("king lior",5);


// }

// 27.
// function getNumberAndSort(...caractors:string=[]):void{

// }
// getNumberAndSort()


// function calac(num1?:number,):number{
//   return num1? num1 +5 : 0 ;
// }
// calac(6)//11

class Cat {
  nameofcat: string;
  age: number;
  color: string;
  private ownerName: string;
  constructor(name_of_cat: string, age: number, color: string) {
    this.nameofcat = name_of_cat;
    this.age = age;
    this.color = color;
  }
  get getOwnerName(): string {
    return this.ownerName;
  }
  set setOwnerName(name: string) {
    name.length < 5 ? this.ownerName = name : console.log("need at list 5 letters");

  }
}
let newCatObject: Cat = new Cat("sama", 12, "blacl");
console.log(newCatObject);


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
  get returnNames() {
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
  private returnAllDetails() {
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
  protected someReturnFunction() {
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
  constructor(fullName: string, age: number, password: string) {
    this.fullName = fullName;
    this.age = age;
    this.password = password;
  }
  get getConnectUser(){
    return this.isConnect
  }
  set setConnected(connected:boolean){
    this.isConnect = connected;
  }

  static getSomeObjectsAndPrint(olderOrYounger:string,...numsOfUsers:User[]){
    if(olderOrYounger === "young"){
      return numsOfUsers.sort((a:User,b:User)=> b.age-a.age)[0];
    }
    else if(olderOrYounger==="older"){
      return numsOfUsers.sort((a:User,b:User)=>a.age-b.age)[0];
    }
    return;
  }
}
let user33 = new User("lior dawit",34,"lllllll");
let user44 = new User("cristiano ronaldo",11,"aaaaaaa");
console.log(User.getSomeObjectsAndPrint(user33,2))

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

  get printAllDetails(){
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

class Room{
  wight:number;
  higth:number;
  area:number;
  private isWindow:boolean=false;
  constructor(wight:number,higth:number,area:number){
    this.wight=wight;
    this.higth=higth;
    this.area=this.higth*this.wight;
  }
  getDetails():string{
    return `Details:${this.wight},${this.higth},${this.area} There is window${this.isWindow}`;
  }
  get isHaveWindow():boolean{
    return this.isWindow;
  }
  set setIsWindow(someBool:boolean){
   this.isWindow = someBool
  }
  static returnTheBiggestRoom(bigOrSmall:string,...roomsObj:Room[]){
    if(bigOrSmall === "small"){
      roomsObj.sort((a:Room,b:Room)=> b.area - a.area)[0]
    }
    else if(bigOrSmall === "big"){
      roomsObj.sort((a:Room,b:Room)=> b.area - a.area)[0]
    }
    return;
  }
}

class Kitchen extends Room{
  numberClosets:number;
  constructor(wight:number,higth:number,numberClosets:number){
    super(wight,higth);
    this.numberClosets=numberClosets;
  }
  printDetails():string{
    return `${super.getDetails()}number of closets:${this.numberClosets}`
  }
  printIfHasWindow(){
    return this.setIsWindow ? "have window" : "no have window"
  }
}

let some11 = new Kitchen(12,44,2);
let some22 = new Kitchen(33,4,3);
let some33 = new Kitchen(33,4,3);
let some44 = new Kitchen(33,4,3);

console.log(Room.returnTheBiggestRoom("big",some11,some22,some33,some44));
