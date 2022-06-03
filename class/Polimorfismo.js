class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ") ");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}

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
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo siento " + this.name + ", solo puedes tomar cursos abiertos."
      );
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo siento " + this.name + ", no puedes tomar cursos en Ingles."
      );
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}
class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
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
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
});

const cursoCompBasica = new Course({
  name: "Computación básica",
});

const cursoIngBasico = new Course({
  name: "Inglés básico",
  lang: "english",
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

const juan = new FreeStudent({
  name: "Juancho",
  userName: "chojuan",
  email: "juan.098@gmail.com",
  instagram: "cho_juan",
  learningPaths: englishAcademy,
});

const manuel = new BasicStudent({
  name: "Manuel",
  userName: "mane",
  email: "manuelito@gmail.com",
  twitter: "mansito_53",
  learningPaths: desarrolloWeb,
});

const freddy = new TeacherStudent({
  name: "Freddy",
  userName: "freddier",
  email: "freddier@gmail.com",
  facebook: "fred13",
});
