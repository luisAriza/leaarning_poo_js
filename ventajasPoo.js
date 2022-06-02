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

class learningPaths {
  constructor({ name, courses }) {
    this.name = name;
    this.courses = courses;
  }
}

const desarrolloWeb = new learningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [
    "Computación básica",
    "Programación básica",
    "Algoritmos y pensamiento lógico básico",
  ],
});

const englishAcademy = new learningPaths({
  name: "Escuela de Platzi English Academy",
  courses: [
    "Estrategias para aprender inglés online",
    "Inglés para principiantes",
    "Inglés básico",
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
