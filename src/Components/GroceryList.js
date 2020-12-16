import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../CustomStylesheet.css';

import React, {useState, useEffect} from 'react';

function GroceryList(){

  const [grocerylist, setGrocerylist] = useState([]);
  let tempGroceryList = [];


  useEffect(() => {
    setGrocerylist(tempGroceryList);
  }, []);


  let renderGroceryItems = grocerylist.map((item)=>
    <tr key={grocerylist.indexOf(item)}>
      <td>{grocerylist.indexOf(item) + 1}</td>
      <td>{item.itemName}</td>
      <td>{item.itemQuantity}</td>
    </tr>
  );

  function handleAddNewItemClick(){

  }

  return(
    <div className="GroceryListMain">
      <h1>Grocery List</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
        {renderGroceryItems}
          <tr>
            <td colSpan="3"><Button variant="outline-dark" onClick={handleAddNewItemClick}>+Add new grocery item</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}

export default GroceryList;
