import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const courseSlice = createSlice({
  name: "course",
  initialState: { courseName: "cs" },
  reducers: {
    setCourse: (state, actions) => {
      state.courseName = actions.payload.courseName === "it" ? "it" : "cs";
    },
  },
});

export const selectCourse = createSelector(
  (store) => store.course,
  (course) => course.courseName
);
export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;
