try {
  function errorfunc(num1, num2: number): number | ReferenceError {
    if (typeof num1 == "number" && typeof num2 == "number") {
      console.log(num1 + num2);
    }
    throw new ReferenceError("Parameter/s are not type of numbers.");
  }
  errorfunc("11", 12);
} catch (error) {
  console.log("Inside the catch block.");
  console.log("The error is " + error);
} finally {
  console.log(
    "Inside the finally block to execute the code before program termination."
  );
}
