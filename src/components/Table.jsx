import { useContext } from "react";
import { Table } from "react-bootstrap";
import Select from "./SelectInput";
import CourseContext from "../context/courseContext";

const CustomTable = ({ semNumber, subjects, subjectVariation }) => {
  const { course } = useContext(CourseContext);
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
