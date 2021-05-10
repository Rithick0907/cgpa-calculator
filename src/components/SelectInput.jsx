import { useState } from "react";
import grades from "../data/grades";

const SelectInput = () => {
  const [grade, setGrade] = useState("RA");
  return (
    <select
      value={grade}
      onChange={({ currentTarget: target }) => setGrade(target.value)}
      name="grade"
    >
      {grades.map(({ grade, value }, index) => (
        <option key={index} value={value}>
          {grade}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
