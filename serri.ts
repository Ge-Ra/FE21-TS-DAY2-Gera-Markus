simple version
//@ts-check
interface Human {
  // name: string;
  name: string;
  age: number;
  jobTitle?: string;
  printCard: Function;
}
// class Person implements Human {
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   printName() {
//     return `Hi, my name is ${this.name} and i am ${this.age} years old`;
//   }
// }

class Person  {
  constructor(public name: string, public age: number, public image : string) {}
  printCard() {
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${this.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.age}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      `;
  }
}
class Student extends Person{
  jobTitle: string;
  constructor(name: string, age: number, image:string, jobTitle: string) {
    super(name, age, image);
    this.jobTitle = jobTitle;
  }
  printCard() {
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${this.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.age}</p>
      <p class="card-text">${this.jobTitle}</p>
      <p>Description</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      `;
  }
}
var john  = new Person("john", 30, "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg");
var john2  = new Person("john", 30, "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg");
var john3  = new Student("john", 30, "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg","IT");
var john4  = new Student("john", 30, "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg", "IT");
var john5  = new Student("john", 30, "https://cdn.pixabay.com/photo/2021/07/03/19/56/paris-6384758__340.jpg", "IT");
var arr: Array<Human> = [john, john2, john3, john4, john5];
 for (let val of arr) {
  document.getElementById("demo").innerHTML += john.printCard();
 }