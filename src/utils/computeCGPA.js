import { actions } from "../store/curriculumSlice";
import grades from "../data/grades";

const getGrade = (grade) => {
  const gradeObj = grades.find((elem) => elem.grade === grade);
  return gradeObj.value;
};

export const computeGPA = (sem, dispatch) => {
  let credits = 0;
  let gpa = 0;
  const { subjects } = sem;
  for (let subject of subjects) {
    if (subject.grade === "RA") continue;

    credits += subject.credit;
    gpa += subject.credit * getGrade(subject.grade);
  }
  gpa /= credits;
  gpa = gpa.toFixed(2);
  dispatch(actions.setGPA({ semNumber: sem.number, gpa }));
};

const computeCGPA = (filteredCurriculum, dispatch) => {
  let cgpa = 0;
  let credits = 0;
  for (let sem of filteredCurriculum) {
    for (let subject of sem.subjects) {
      if (subject.grade === "RA") continue;

      credits += subject.credit;
      cgpa += subject.credit * getGrade(subject.grade);
    }
  }
  cgpa = (cgpa / credits).toFixed(2);
  dispatch(actions.setCGPA({ cgpa }));
  return 1;
};

export default computeCGPA;
