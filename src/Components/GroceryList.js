import Item from './Item.js';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../CustomStylesheet.css';

import React, {useState, useEffect} from 'react';

function GroceryList(){

  const [grocerylist, setGrocerylist] = useState([]);

  /*
  let tempGroceryList = [{
    itemName: "asdasd",
    itemQuantity: "345"
  },
  {
    itemName: "fgherfg",
    itemQuantity: "77kg"
  }];*/

  /*
  useEffect(() => {
    setGrocerylist(tempGroceryList);
  }, []);*/
  /*
  let renderGroceryItems = grocerylist.map((item)=>
    <tr key={grocerylist.indexOf(item)}>
      <td>{grocerylist.indexOf(item) + 1}</td>
      <td>{item.itemName}</td>
      <td>{item.itemQuantity}</td>
    </tr>
  );*/

  let renderGroceryItems = grocerylist.map((item)=>
    <Item key={grocerylist.indexOf(item)} item={item} number={grocerylist.indexOf(item) + 1}/>
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
