function Widget(partNo, size) {
  this.partNo = partNo;
  this.size = size;
  console.log(this.partNo, this.size);
}

function FormFactor(material, widget) {
  (this.material = material),
    (this.widget = widget),
    console.log(this.material, this.widget);
}

var widgeta = new Widget(101, "small");
console.log(widgeta);
var formFactorA = new FormFactor("plastic", "clock");
console.log(formFactorA);
