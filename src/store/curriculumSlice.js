import { createSelector, createSlice } from "@reduxjs/toolkit";
import curriculum from "../data/curriculum";

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: curriculum,
  reducers: {
    updateGrade: (state, payload) => {
      state = payload.grade;
    },
  },
});

export const selectSubjects = createSelector(
  (store) => store.curriculum.find((sem) => sem.visited),
  (sem) => sem.subjects
);

export const selectCurriculum = createSelector(
  (store) => store.curriculum,
  (curriculum) => curriculum
);
export const { actions } = curriculumSlice;
export default curriculumSlice.reducer;
