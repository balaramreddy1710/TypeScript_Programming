var w = 1;
console.log(w);
w = "string";
console.log(w);
w = {
    meth: function () {
        console.log("This is an object");
    },
};
if (typeof w === "object" && w !== null) {
    w.meth();
}
