import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { courseName: "cs" },
  reducers: {
    setCourse: (state, actions) => {
      console.log(actions);
      state.courseName = actions.payload.courseName === "it" ? "it" : "cs";
    },
  },
});

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;
