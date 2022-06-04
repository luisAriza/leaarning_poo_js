function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requireParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requireParam("name"),
  age = requireParam("age"),
  email = requireParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };
  const public = {
    age,
    email,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    approvedCourses,
    learningPaths,

    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 carácter");
      }
    },
  };

  return public;
}

const luis = createStudent({
  name: "Luis",
  age: 22,
  email: "Luisito@gmail.com",
  twitter: "Lm_Ap",
});
