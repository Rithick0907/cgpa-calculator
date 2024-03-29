import { createSelector, createSlice } from "@reduxjs/toolkit";
import curriculum from "../data/curriculum";

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: curriculum,
  reducers: {
    setSelectedSem: (state, actions) => {
      const { payload } = actions;
      for (let i of state) i.visited = false;
      const index = state.findIndex(
        (elem) => elem.number === payload.sem.number
      );
      state[index].visited = true;
    },

    setGrade: (state, actions) => {
      const { payload } = actions;
      const { updatedGrade, semNumber } = payload;
      const index = state.findIndex((elem) => elem.number === semNumber);
      if (payload.subjectIndex !== undefined) {
        state[index].subjects[payload.subjectIndex].grade = updatedGrade;
      } else {
        state[index].variation[payload.course].grade = updatedGrade;
      }
    },

    setGPA: (state, actions) => {
      const { payload } = actions;
      const index = state.findIndex(
        (elem) => elem.number === payload.semNumber
      );
      state[index].gpa = payload.gpa;
    },

    setCGPA: (state, actions) => {
      const { payload } = actions;
      for (let index in state) {
        state[index].cgpa = Number(payload.cgpa);
      }
    },

    resetCurriculum: (state) => {
      Object.assign(state, curriculum);
    },
  },
});

export const selectCurriculum = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum
);

export const selectedSem = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum.findIndex((elem) => elem.gpa > 0)
);

export const selectSubjects = createSelector(
  (store) => store.curriculum.find((sem) => sem.visited),
  (sem) => sem.subjects
);

export const selectGPA = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum.filter((elem) => elem.gpa > 0)
);

export const selectCGPA = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum[0].cgpa
);

export const { actions } = curriculumSlice;
export default curriculumSlice.reducer;
