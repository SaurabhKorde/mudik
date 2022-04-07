const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");
const exercise = require("../exercise1");
const { TestWatcher } = require("jest");

// describe("absolute", () => {
//   test("absolute- Should  return positive number if input is positive  ", () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
//   });

//   test("absolute- Should  return positive number if input is nagative  ", () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
//   });

//   test("absolute- Should  return zero number if input is zero  ", () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
//   });
// });

// describe("greet", () => {
//   it("should return greeting message", () => {
//     const result = lib.greet("Saurabh");
//     //expect(result).toBe("Welcome Saurabh");
//     expect(result).toMatch(/Saurabh/);
//   });
// });

// describe("getCurrencies", () => {
//   it("Should return all supported currencies", () => {
//     const result = lib.getCurrencies();
//     expect(result).toBeDefined();
//     expect(result).not.toBeNull();

//     expect(result[0]).toBe("USD");
//     expect(result[1]).toBe("AUD");
//     expect(result[2]).toBe("EUR");

//     expect(result).toContain("USD");
//     expect(result).toContain("AUD");
//     expect(result).toContain("EUR");

//     expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
//   });
// });

// describe("getProduct", () => {
//   it("Should return a product with the  given productId", () => {
//     const result = lib.getProduct(1);
//     expect(result).toHaveProperty("id", 1);
//     expect(result).toEqual({ id: 1, price: 10 });
//     expect(result).toMatchObject({ id: 1, price: 10 });
//   });
// });

// // describe("registerUser", () => {
// //   it("Should throw an error if username  is  falsy", () => {
// //     let arr = [undefined, null, NaN, "", false, 0];
// //     arr.forEach((a) => expect(() => lib.registerUser(a)).toThrow());
// //   });
// //   it("should return a user object  with given username",()=>{
// //       const  result=lib.registerUser("Saurabh");
// //       expect(result).
// //   })
// // });

// // describe("applyDiscount", () => {
// //   it("Should apply 10% discount if customer has more than 10 points", () => {
// //       db.getCustomerSync()=jest.fn().mockReturnValue({id:1,points:20})
// //       const order={customerId:1,totalPrice:10}
// //       lib.applyDiscount(order);
// //       expect(order.totalPrice).toBe(9);
// //   });
// // });

// describe("notifyCustomer", () => {
//   it("should  send email to the customerwhen order is plasced", () => {
//     db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
//     mail.send = jest.fn();
//     const order = { cistomerId: 1, totalPrice: 10 };
//     lib.notifyCustomer(order);
//     expect(mail.send).toHaveBeenCalled();
//     expect(mail.send.mock.calls[0][0]).toBe("a");
//     expect(mail.send.mock.calls[0][1]).toMatch(/order/);
//   });
// });

describe("fizzBuzz", () => {
  test("There is fizzBuzz Testing...", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  test("There is Fizz Testing...", () => {
    const result = exercise.fizzBuzz(12);
    expect(result).toBe("Fizz");
  });

  test("There  is  Buzz Testing...", () => {
    const result = exercise.fizzBuzz(20);
    expect(result).toBe("Buzz");
  });
});
