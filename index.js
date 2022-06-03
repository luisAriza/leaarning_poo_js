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

// Object.seal(luis);
Object.freeze(luis);

console.log(Object.getOwnPropertyDescriptors(luis));
