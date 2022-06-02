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

function Student(name, age, courseCompleted) {
  this.name = name;
  this.age = age;
  this.courseCompleted = courseCompleted;
}

Student.prototype.courseSuccessful = function (newCourse) {
  this.courseCompleted.push(newCourse);
};

const juanita = new Student("Juanita Alejandra", 16, [
  "Curso Básico de Javascript",
  "Curso Practico de Javascript",
]);
