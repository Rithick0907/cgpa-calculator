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
      const { updatedGrade, semNumber, subjectIndex } = payload;
      const index = state.findIndex((elem) => elem.number === semNumber);
      state[index].subjects[subjectIndex].grade = updatedGrade;
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
        state[index].cgpa = actions.cgpa;
      }
    },
  },
});

export const selectCurriculum = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum
);

export const selectSubjects = createSelector(
  (store) => store.curriculum.find((sem) => sem.visited),
  (sem) => sem.subjects
);

export const selectCGPA = createSelector(
  (store) => store.curriculum[0],
  (sem) => sem.cgpa
);

export const { actions } = curriculumSlice;
export default curriculumSlice.reducer;
