/*function clickMeEvent(obj) {
  if (obj.innerHTML == "Click Me") {
    obj.innerHTML = "Click Me<br>Click Me Again";
    return;
  }
  if (obj.innerHTML == "Click Me<br>Click Me Again") {
    obj.innerHTML = "Thank You";
    return;
  }
  if (obj.innerHTML == "Thank You") {
    obj.innerHTML = "Goodbye";
    return;
  }
  if (obj.innerHTML == "Goodbye") {
    obj.style.display = "none";
    return;
  }
}


class Car{
  constructor(name,year){
    this.name=name;
    this.year=year;
  }
  age(){
    const date = new Date();
    return date.getFullYear() - this.year
  }
}
const myCar= new Car('Chevrolet', 2013)
console.log(`My car is ${myCar.age()} years old`)
*/

let listItems = document.getElementById("ul");
let iconElement = document.getElementById("icon");
let modal = document.getElementById("modal");
 
  iconElement.innerHTML = `<i class="fa fa-bars"></i>`;
 

function myFunction() {
  listItems.style.display = "none";

  if (iconElement.innerHTML === `<i class="fa fa-bars"></i>`) {
    iconElement.innerHTML = `<i class="fa fa-x"></i>`;
    listItems.style.display = "flex";
  } else {
    iconElement.innerHTML = `<i class="fa fa-bars"></i>`;
  }
}

/*
function modalFunction(){
modal.style.display='flex'
}

function hideModal(){
  modal.style.display='none'
}*/
{
  /* <span class="fas fa-moon"></span> */
}

let modeChanger = document.getElementById("addMode");
modeChanger.innerHTML = `<span class="fas fa-sun"></span>`;
let bodyElement = document.querySelector("body");
let headerElement = document.querySelector("header");
let headerLink = document.getElementById("head");

function changeMode() {
  if (modeChanger.innerHTML === `<span class="fas fa-sun"></span>`) {
    modeChanger.innerHTML = `<span class="fas fa-moon"></span>`;
    bodyElement.style.background = "gray";
    headerElement.style.background = "black";
    // modeChanger.style.color = "white";
    // listItems.style.background = "gray";
    // listItems.style.color = "white";
    headerLink.style.color = "white";
    headerLink.style.borderBottomColor = "white";

    return;
  }

  if (modeChanger.innerHTML === `<span class="fas fa-moon"></span>`) {
    modeChanger.innerHTML = `<span class="fas fa-sun"></span>`;
    bodyElement.style.background = "white";
    // listItems.style.background = "white";
    modeChanger.style.color = "black";
    headerLink.style.color = "black";
    headerElement.style.background = "white";
    headerLink.style.borderBottomColor = "black";
    listItems.style.color = "black";
    return;
  }

  return modeChanger;
}

/*
class car {
  constructor(brands) {
    this.brand=brands;
  }
  present(){
    return `I have a car named ${this.brand}`
  }
}

class Model extends car {
  constructor(brands,model){
    super(brands);
    this.mod=model;
  }
show(){
  return`${this.present()}, It is a ${this.mod}`
}
}

const myCar = new Model('Chevrolet','Mustang')
console.log(myCar.show());*/

/*class car {
  constructor(brand) {
    this.brand = brand;
  }
  get brand() {
    return this._brand;
  }

  set brand(x) {
    x = "Chevrolet";
    this._brand = x;
  }
}

const myCar = new car("ford");
myCar.cnam = "HEYY";
console.log(myCar.brand);*/


let displayNav=document.getElementById('displayNav');


let icon2 = document.getElementById("iconf");
 
icon2.innerHTML = `<i class="fa fa-bars"></i>`;


function getNav() {
  displayNav.style.display='none';

  if (icon2.innerHTML === `<i class="fa fa-bars"></i>`) {
    icon2.innerHTML = `<i class="fa fa-x"></i>`;
    displayNav.style.display = "flex";
  } else {
    icon2.innerHTML = `<i class="fa fa-bars"></i>`;
  }
}
