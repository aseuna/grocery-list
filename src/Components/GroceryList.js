import Item from './Item.js';
import EditItem from './EditItem.js';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../CustomStylesheet.css';

import React, {useState, useEffect} from 'react';

function GroceryList(){

    const [grocerylist, setGrocerylist] = useState([]);
    const [editModeIndex, setEditModeIndex] = useState(-1);

    // variable that contains items to be rendered 
    let renderGroceryItems = grocerylist.map((item)=>
        <SetItemType key={grocerylist.indexOf(item)} item={item} number={grocerylist.indexOf(item) + 1}/>
    );

    /*
    function triggered by a callback function for Item-element which handles assignment of editModeIndex
    
    */    
    function handleEditMode(newEditModeIndex){
        setEditModeIndex(newEditModeIndex);
    }

    /*
    function that handles data from EditItem-component
    */
    function handleDataFromEditItem(dataItem){
        setEditModeIndex(dataItem.editModeIndex);
    }

    /* 
    function that chooses correct item to be rendered in the list based on whether the index
    is in edit mode or not, editModeIndex is based on which element user has clicked
    */
    function SetItemType(props){
        let itemIndex = props.number - 1;
        if(editModeIndex === itemIndex){
            return <EditItem item={props.item} number={props.number} dataFromEditItem={handleDataFromEditItem}/>
        } else {
            return <Item item={props.item} number={props.number} editModeIndexFromItem={handleEditMode}/>
        }
    }

    /*
    Function that adds a new empty grocery item to grocery list when button is clicked
    */
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
            <th className="edit"></th>
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
