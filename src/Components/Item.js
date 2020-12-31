import '../custom-stylesheet.css';

import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

/**
 * Component which inludes one row in the table of parent component(App.js).
 * In the row there are information on the grocery item:
 * the number of the item, name, and quantity.
 * This component is replaced by EditItem-component when user enters "edit mode"
 * 
 * @param {*} props 
 */
function Item(props){

    const [groceryItem, setGroceryItem] = useState({});
    const [itemIndex, setItemIndex] = useState(null);

    useEffect(() => {
        setGroceryItem(props.item);
        setItemIndex(props.number - 1);
    }, [props]);

    /**
    function for button click, sends data back to GroceryList-element, data indicates
    which Item-element is to be rendered as EditItem-element instead based on its index number on the list, 
    the index is known by the props given to this element
    */
    function editButtonClick(){
        props.dataFromItem(itemIndex);
    }

    return(
      <tr>
        <td className="number">{props.number}</td>
        <td className="name">{groceryItem.itemName}</td>
        <td className="quantity">{groceryItem.itemQuantity}</td>
        <td className="edit"><Button variant="outline-info" onClick={editButtonClick}>Edit</Button></td>
      </tr>
    );
}

export default Item;
