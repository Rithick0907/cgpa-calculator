import { createSelector, createSlice } from "@reduxjs/toolkit";
import curriculum from "../data/curriculum";

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: curriculum,
  reducers: {
    setSelectedSem: (state, { payload }) => {
      for (let i of state) i.visited = false;
      const index = state.findIndex(
        (elem) => elem.number === payload.sem.number
      );
      state[index].visited = true;
    },
    setGrade: (state, { payload }) => {
      const { updatedGrade, semNumber, subjectIndex } = payload;
      const index = state.findIndex((elem) => elem.number === semNumber);
      state[index].subjects[subjectIndex].grade = updatedGrade;
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

export const { actions } = curriculumSlice;
export default curriculumSlice.reducer;
