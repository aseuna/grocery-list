import Table from 'react-bootstrap/Table';
import '../CustomStylesheet.css';

function GroceryList(){

  return(
    <div className="GroceryListMain">
      <h1>Grocery List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td></td>
            <td>+Add new grocery item</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}

export default GroceryList;
