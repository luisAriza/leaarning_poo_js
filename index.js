class Student {
  constructor({
    name,
    email,
    userName,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoCompBasica = new Course({
  name: "Computación básica",
});

const cursoIngBasico = new Course({
  name: "Inglés básico",
});

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const desarrolloWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoCompBasica,
    cursoProgBasica,
    "Algoritmos y pensamiento lógico básico",
  ],
});

const englishAcademy = new LearningPaths({
  name: "Escuela de Platzi English Academy",
  courses: [
    cursoIngBasico,
    "Estrategias para aprender inglés online",
    "Inglés para principiantes",
  ],
});

const juan2 = new Student({
  name: "Juancho",
  userName: "chojuan",
  email: "juan.098@gmail.com",
  instagram: "cho_juan",
  learningPaths: englishAcademy,
});

const manuel = new Student({
  name: "Manuel",
  userName: "mane",
  email: "manuelito@gmail.com",
  twitter: "mansito_53",
  learningPaths: desarrolloWeb,
});
