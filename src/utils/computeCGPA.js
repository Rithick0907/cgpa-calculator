import { actions } from "../store/curriculumSlice";
import grades from "../data/grades";

const isInvalid = (subject) =>
  subject.grade === "RA" || subject.grade === "SA" || subject.grade === "W";

const getGrade = (grade) => {
  const gradeObj = grades.find((elem) => elem.grade === grade);
  return gradeObj.value;
};

const computeAverage = (total, credits) => {
  const avg = total / credits;
  return avg.toFixed(2);
};

export const computeGPA = (sem, dispatch, course) => {
  let credits = 0;
  let gpa = 0;
  let total = 0;
  const { subjects, variation } = sem;

  for (let subject of subjects) {
    if (isInvalid(subject)) continue;

    credits += subject.credit;
    total += subject.credit * getGrade(subject.grade);
  }

  console.log(variation);
  if (variation) {
    const subject = variation[course];

    credits += subject.credit;
    total += subject.credit * getGrade(subject.grade);
  }

  gpa = computeAverage(total, credits);
  if (dispatch) dispatch(actions.setGPA({ semNumber: sem.number, gpa }));
  return {
    total,
    credits,
  };
};

const computeCGPA = (filteredCurriculum, dispatch, course) => {
  let cgpa = 0;
  let credits = 0;
  for (let sem of filteredCurriculum) {
    let result = computeGPA(sem, false, course);
    cgpa += result.total;
    credits += result.credits;
  }

  cgpa = computeAverage(cgpa, credits);

  dispatch(actions.setCGPA({ cgpa }));
  return 1;
};

export default computeCGPA;
