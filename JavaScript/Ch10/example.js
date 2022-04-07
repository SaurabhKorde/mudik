function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;
  this.start = function () {
    console.log(`heyy`);
  };
  let x = new Car("honda", "City", 2000, "red", 5, false, 1234);
}
console.log(Car);
