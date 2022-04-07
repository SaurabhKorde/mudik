function Car(obj) {
  this.start = obj.start;

  this.drive = obj.drive;

  this.stop = obj.stop;

  this.DRIVE = function () {
    console.log("DRIVING THE CAR");
    console.log(this.start, this.drive, this.stop);
  };
}
let obj = {
  start: "self",
  drive: "auto",
  stop: "manual",
};
var vehicle = new Car(obj);

console.log(vehicle);
vehicle.DRIVE();
