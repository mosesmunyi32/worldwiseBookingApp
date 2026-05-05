const students = [
  {
    name: "james",
    math: 60,
    eng: 50,
  },
  {
    name: "Hope",
    math: 80,
    eng: 60,
  },

  {
    name: "Maina",
    math: 30,
    eng: 45,
  },
];

function studentsWithFinalScore(students) {
  students.map(({ math, eng, ...rest }) => {
    return {
      ...rest,
      math,
      eng,
      finalScore: math + eng,
    };
  });
}

studentsWithFinalScore(students);
