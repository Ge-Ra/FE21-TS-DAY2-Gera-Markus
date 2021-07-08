"use strict";
class Vehicle {
    constructor(image, brand, model, pYear, kilometers) {
        this.image = image;
        this.brand = brand;
        this.model = model;
        this.pYear = pYear;
        this.kilometers = kilometers;
    }
    printCard() {
        return `<div class="card col-4" style="width: 18rem;">
      <img src="${this.image}" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">${this.brand}</h5>
        <p class="card-text">Model : ${this.model} <br> Year: ${this.pYear} <br></p>
        <a href="#" class="btn btn-primary" id="btn">Show more</a>
      </div>
    </div>
     `;
    }
    calculatePrice() {
        let price = this.kilometers + this.pYear;
        return `${price}`;
    }
    details() {
        document.getElementById("container").innerHTML = `
        <div class="card col-4" style="width: 18rem;">
        <img src="${newVehicle.image}" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${newVehicle.brand}</h5>
          <p class="card-text">Model : ${newVehicle.model} <br> Year: ${newVehicle.pYear} <br></p>
          <p class="card-text">Kilometers : ${newVehicle.kilometers} <br> Price: ${newVehicle.calculatePrice()} <br></p>
          
        </div>
      </div>
     `;
    }
}
var newVehicle = new Vehicle("https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg", "Ford", "Mustang", 1968, 10000);
document.getElementById("container").innerHTML = newVehicle.printCard();
document.getElementById("btn").addEventListener("click", newVehicle.details);
// class  Motorbike extends Vehicle{
//     numberOfSeats: number;
//     constructor(public image : string, public brand : string, public model: string, public pYear: number, public kilometers: number, numberOfSeats: number)  {
//       super(image ,brand, model, pYear, kilometers);
//       this.numberOfSeats = numberOfSeats;
//     }
//     printCard() {
//       return `
//     `;
//     }
//   }
// var newMotorbike = new Motorbike("image", "Triumph", "Treet Twin 1200" , 2021, 5000, 2);
// document.getElementById("output").innerHTML += newMotorbike.printCard();
// class  Truck extends Vehicle{
//   fuelType: string;
//   constructor(public image : string, public brand : string, public model: string, public pYear: number, public kilometers: number, fuelType: string)  {
//     super(image,brand, model, pYear, kilometers);
//     this.fuelType = fuelType;
//   }
//   printCard() {
//     return `
//   `;
//   }
// }
// var newTruck = new Truck("image","Mercedes", "Sprinter" , 2005, 40.000,  "Disel");
// document.getElementById("output").innerHTML += newTruck.printCard();
