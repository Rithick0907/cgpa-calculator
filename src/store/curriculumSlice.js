import { createSelector, createSlice } from "@reduxjs/toolkit";
import curriculum from "../data/curriculum";

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: curriculum,
  reducers: {
    setSelectedSem: (state, { payload }) => {
      for (let i of state) i.visited = false;
      const index = state.findIndex((elem) => elem.number === payload.number);
      state[index].visited = true;
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
