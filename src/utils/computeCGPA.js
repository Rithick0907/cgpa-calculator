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

const computeCGPA = (curriculum, dispatch) => {
  let cgpa = 0;
  let credits = 0;
  for (let sem of curriculum) {
    cgpa += computeGPA(sem, dispatch);
  }
  return 1;
};

export default computeCGPA;
