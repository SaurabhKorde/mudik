function printMessage(firstname) {
  const message = "Happy birthday to you";
  for (let i = 0; i < 3; i++) {
    document.write(message);
    document.write("<br/>");
    if (i == 1) {
      document.write(`Happy Birthday dear ${firstname} <br/>`);
    }
  }
  document.write("<hr/>");
}
printMessage("Saurabh");
printMessage("Peter");
printMessage("Indira");
printMessage("Rajshree");
printMessage("Pradnya");
printMessage("Saket");
printMessage("Rishabh");
printMessage("Dattaram");
printMessage("Finney");
