var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printCard = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle + "\n      <br>";
    };
    return Person;
}());
var GeRa = new Person("GeRa", 32, "Front End Developer");
document.getElementById("output").innerHTML = GeRa.printCard();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Student.prototype.printCard = function () {
        return "<br>" + _super.prototype.printCard.call(this) + " and I get " + this.salary + " $ every month, and I work in " + this.jobLocation + ".\n    ";
    };
    return Student;
}(Person));
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
