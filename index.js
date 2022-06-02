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

function videoPlay(id) {
  const secretUrl = "https://platziultrasecreto.com/" + id;
  console.log("Se esta reproduciendo la url secreta " + secretUrl);
}

function videoStop(id) {
  const secretUrl = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + secretUrl);
}

class PlatziCLass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === "Curso Malo de Programación Basica") {
      console.error("Web... no");
    } else {
      this._name = newName;
    }
  }
}

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const class23 = new PlatziCLass({
  name: "Javascript orientado a objetos, basado en prototipos",
  videoID: "s4g61re6b8f8",
});

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoCompBasica = new Course({
  name: "Computación básica",
});

const cursoIngBasico = new Course({
  name: "Inglés básico",
});

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
