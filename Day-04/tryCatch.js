function pass(password) {
    if (password.length < 6) {
        throw new Error("Password is small");
    }
    return true;
}
try {
    var valid = pass("1234");
    console.log(valid);
}
catch (error) {
    console.log(error);
}
