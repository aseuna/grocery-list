import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-stylesheet.css';

import Item from './Components/Item.js';
import EditItem from './Components/EditItem.js';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import React, {useState} from 'react';
/**
 * Main App
 */
function App(){

    // the main list for holding groceryitems
    const [grocerylist, setGrocerylist] = useState([]);
    /**
     * editModeIndex tells which Item is to be edited(and replaced by EditItem-component),
     * -1 means "edit mode" is off
     */
    const [editModeIndex, setEditModeIndex] = useState(-1);
    /**
     * state for representing the input element that will be focused when editing
     * the string comes from Item component based on what element the user presses
     * options: NAME or QUANTITY
     */ 
    const [elementToFocus, setElementToFocus] = useState("");
    // string for button
    let addNewItemBtnText = "+Add new grocery item";

    // variable that contains items to be rendered 
    let renderGroceryItems = grocerylist.map((item)=>
        <SetItemType key={grocerylist.indexOf(item)} item={item} number={grocerylist.indexOf(item) + 1} elementToFocus={elementToFocus}/>
    );

    /**
    * function triggered by a callback function for Item-element which handles assignment of editModeIndex
    */    
    function handleDataFromItem(data){
        setEditModeIndex(data.itemIndex);
        setElementToFocus(data.element);
    }

    /**
    * function that handles data from EditItem-component
    */
    function handleDataFromEditItem(data){
        setEditModeIndex(data.editedEditModeIndex);
        let dummyGroceryItem = {
            itemName: data.editedItemName,
            itemQuantity: data.editedItemQuantity
        }

        let dummyGroceryList = [...grocerylist];
        dummyGroceryList.splice(data.editedItemIndex, 1, dummyGroceryItem);
        setGrocerylist(dummyGroceryList);
    }

    /**
    * function component that chooses correct component(Item.js or EditItem.js) to be rendered
    * in the list based on whether the index is in edit mode or not,
    * editModeIndex is based on which element user has clicked
    */
    function SetItemType(props){
        let itemIndex = props.number - 1;
        if(editModeIndex === itemIndex){
            return <EditItem 
            item={props.item} 
            elementToFocus={props.elementToFocus} 
            number={props.number} 
            dataFromEditItem={handleDataFromEditItem}
            />
        } else {
            return <Item 
            item={props.item} 
            number={props.number} 
            dataFromItem={handleDataFromItem}
            />
        }
    }

    /**
    * Function that adds a new empty grocery item to grocery list when button is clicked
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
        <Table bordered size="sm">
            <thead>
                <tr>
                    <th className="number">#</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th className="check"></th>
                </tr>
            </thead>
            <tbody>
                {renderGroceryItems}
                <tr>
                    <td colSpan="4">
                        <Button 
                        className="addNewItemButton"
                        variant="outline-dark" 
                        onClick={handleAddNewItemClick}>
                        {addNewItemBtnText}
                        </Button>
                    </td>
                </tr>
            </tbody>
      </Table>
    </div>

  );
}

export default App;
