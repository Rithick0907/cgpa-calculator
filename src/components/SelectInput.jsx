import { useDispatch } from "react-redux";
import { Control } from "react-redux-form";
import { actions } from "../store/curriculumSlice";
import grades from "../data/grades";

const SelectInput = ({ code, grade, semNumber, subjectIndex }) => {
  const { setGrade } = actions;
  const dispatch = useDispatch();
  return (
    <Control.select
      model={`.${code}`}
      value={grade}
      onChange={({ currentTarget: target }) =>
        dispatch(
          setGrade({
            updatedGrade: target.value,
            semNumber: semNumber,
            subjectIndex,
          })
        )
      }
      name="grade"
    >
      {grades.map(({ grade }, index) => (
        <option key={index} value={grade}>
          {grade}
        </option>
      ))}
    </Control.select>
  );
};

export default SelectInput;
