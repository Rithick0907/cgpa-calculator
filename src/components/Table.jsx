import { Table } from "react-bootstrap";
import Select from "./SelectInput";

const CustomTable = ({ subjects }) => (
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
            <Select code={subject.subjectCode} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default CustomTable;
