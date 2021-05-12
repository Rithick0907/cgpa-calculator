import { useState } from "react";
import { Control } from "react-redux-form";
import grades from "../data/grades";

const SelectInput = ({ sem, code }) => {
  const [grade, setGrade] = useState("RA");
  return (
    <Control.select
      model={`.${code}`}
      value={grade}
      onChange={({ currentTarget: target }) => setGrade(target.value)}
      name="grade"
    >
      {grades.map(({ grade, value }, index) => (
        <option key={index} value={value}>
          {grade}
        </option>
      ))}
    </Control.select>
  );
};

export default SelectInput;
