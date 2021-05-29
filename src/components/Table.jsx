import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "./SelectInput";
import { selectCourse } from "../store/courseSlice";

const CustomTable = ({ semNumber, subjects, subjectVariation }) => {
  const course = useSelector(selectCourse);
  const variation = subjectVariation ? subjectVariation[course] : null;

  return (
    <Table className="border-0" responsive="sm" hover>
      <thead>
        <th>Subject Code</th>
        <th>Subject Name</th>
        <th>Credits</th>
        <th>Grade</th>
      </thead>
      <tbody>
        {subjects.map((subject, index) => (
          <tr key={index}>
            <td>{subject.subjectCode}</td>
            <td>{subject.subject}</td>
            <td>{subject.credit}</td>
            <td>
              <Select
                grade={subject.grade}
                semNumber={semNumber}
                subjectIndex={index}
              />
            </td>
          </tr>
        ))}
        {variation ? (
          <tr>
            <td>{variation.subjectCode}</td>
            <td>{variation.subject}</td>
            <td>{variation.credit}</td>
            <td>
              <Select
                grade={variation.grade}
                semNumber={semNumber}
                course={course}
              />
            </td>
          </tr>
        ) : null}
      </tbody>
    </Table>
  );
};

export default CustomTable;
