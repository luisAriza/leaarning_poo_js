//Objetos literales
const natalia = {
  name: "Natalia",
  age: 18,
  courseCompleted: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS",
  ],
  courseSuccessful(newCourse) {
    this.completed.push(newCourse);
  },
};

//--------------------------------------------------------------------------------------------

//Prototipos
function Student(name, age, courseCompleted) {
  this.name = name;
  this.age = age;
  this.courseCompleted = courseCompleted;
  // this.courseSuccessful = function (newCourse) {
  // 	this.courseCompleted.push(newCourse);
  // }
}

Student.prototype.courseSuccessful = function (newCourse) {
  this.courseCompleted.push(newCourse);
};

const juanita = new Student("Juanita Alejandra", 16, [
  "Curso Básico de Javascript",
  "Curso Practico de Javascript",
]);

//---------------------------------------------------------------------------------------------

//Clases
class Student2 {
  constructor({ name, age, email, courseCompleted = [] }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.courseCompleted = courseCompleted;
  }
  courseSuccessful(newCourse) {
    this.courseCompleted.push(newCourse);
  }
}

const miguel = new Student2({
  email: "miguelito.123@gmail.com",
  name: "Miguel",
  age: 20,
});
