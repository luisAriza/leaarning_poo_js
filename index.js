const luis = {
  name: "Luis",
  age: 20,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(luis));
// console.log(Object.getOwnPropertyNames(luis));
// console.log(Object.entries(luis));

Object.defineProperty(luis, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true,
});
Object.defineProperty(luis, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false,
  configurable: true,
});
Object.defineProperty(luis, "terminal", {
  value: "Bash",
  enumerable: true,
  writable: true,
  configurable: false,
});
Object.defineProperty(luis, "pruebaNasa", {
  value: "Extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(luis));
