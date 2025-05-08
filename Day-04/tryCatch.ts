function pass(password: string): boolean {
  if (password.length < 6) {
    throw new Error("Password is small");
  }
  return true;
}

try {
  let valid = pass("1234");
  console.log(valid);
} catch (error) {
  console.log(error);
}
