let w: unknown = 1;
console.log(w);
w = "string";
console.log(w);
w = {
  meth: () => {
    console.log("This is an object");
  },
} as { meth: () => void };

if (typeof w === "object" && w !== null) {
  (w as { meth: Function }).meth();
}
