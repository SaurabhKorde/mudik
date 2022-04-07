function whatShallWear(temp) {
  if (temp < 60) {
    console.log("Wear a Jacket.");
  } else if (temp < 70) {
    console.log("Wear a Sweater.");
  } else {
    console.log("Wear a T-Shirt.");
  }
}
whatShallWear(80);
whatShallWear(60);
whatShallWear(50);
