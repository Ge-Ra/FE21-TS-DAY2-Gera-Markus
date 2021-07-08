"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printCard() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}
      <br>`;
    }
}
var GeRa = new Person("GeRa", 32, "Front End Developer");
document.getElementById("output").innerHTML = GeRa.printCard();

class Student extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printCard() {
        return `<br>${super.printCard()} and I get ${this.salary} $ every month, and I work in ${this.jobLocation}.
    `;
    }
}
var GeRa1 = new Student("GeRa", 32, "Front End Developer", 5000, "Vienna");
document.getElementById("output").innerHTML += GeRa1.printCard();
// class Card {
//    public title: string;
//    public text: string;
//    public image : string;
//    constructor(title :string, text:string, image:string){
//        this.title = title;
//        this.text = text;
//        this.image = image;
//    }
//    printCard(){
//    return `<div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="${this.image}" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">${this.title}</h5>
//                 <p class="card-text">${this.text}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `;
//     }
// }
// var firstCard  = new Card("Test Title", "some nice decscription", "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg");
// // console.log(firstCard);
//    document.getElementById("output").innerHTML =  firstCard.printCard();
