import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actions } from "../store/curriculumSlice";
import grades from "../data/grades";

const SelectInput = ({ grade, semNumber, subjectIndex }) => {
  const { setGrade } = actions;
  const dispatch = useDispatch();
  return (
    <Form.Control
      as="select"
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
    </Form.Control>
  );
};

export default SelectInput;
