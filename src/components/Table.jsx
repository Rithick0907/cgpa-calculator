import { Table } from "react-bootstrap";

const CustomTable = () => {
  return (
    <Table striped hover>
      <thead>
        <th>Subject Code</th>
        <th>Subject Name</th>
        <th>Grade</th>
      </thead>
      <tbody>
        <tr>
          <td>XC9872</td>
          <td>TOC</td>
          <td>
            <select name="grade">
              <option value="O">O</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="RA">RA</option>
            </select>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable;
