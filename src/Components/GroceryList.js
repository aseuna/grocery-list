import Item from './Item.js';
import EditItem from './EditItem.js';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../CustomStylesheet.css';

import React, {useState, useEffect} from 'react';

function GroceryList(){

  const [grocerylist, setGrocerylist] = useState([]);

  let renderGroceryItems = grocerylist.map((item)=>
    <EditItem key={grocerylist.indexOf(item)} item={item} number={grocerylist.indexOf(item) + 1}/>
  );

  function handleAddNewItemClick(){
    setGrocerylist(grocerylist => [...grocerylist, {
      itemName: "",
      itemQuantity: ""
    }]);
  }

  return(
    <div className="GroceryListMain">
      <h1>Grocery List</h1>
      <Table bordered size="sm" hover>
        <thead>
          <tr>
            <th className="number">#</th>
            <th>Item</th>
            <th className="quantity">Quantity</th>
            <th className="edit">Edit</th>
          </tr>
        </thead>
        <tbody>
          {renderGroceryItems}
          <tr>
            <td colSpan="5"><Button variant="outline-dark" onClick={handleAddNewItemClick}>+Add new grocery item</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}

export default GroceryList;
