import '../custom-stylesheet.css';

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
    * Function to handle click on grocery item name element, sends data back to GroceryList-element,
    * data indicates which Item-element is to be rendered as EditItem-element instead
    * based on its index number on the list, the index is known by the props given to this element
    */
    function handleItemNameClick(){
        props.dataFromItem({
            itemIndex: itemIndex,
            element: "NAME"
        });
    }
    /**
    * Function to handle click on grocery item quantity element, sends data back to GroceryList-element,
    * data indicates which Item-element is to be rendered as EditItem-element instead
    * based on its index number on the list, the index is known by the props given to this element
    */
    function handleItemQuantityClick(){
        props.dataFromItem({
            itemIndex: itemIndex,
            element: "QUANTITY"
        });
    }

    return(
      <tr>
        <td className="number">{props.number}</td>
        <td onDoubleClick={handleItemNameClick} className="name">{groceryItem.itemName}</td>
        <td onDoubleClick={handleItemQuantityClick} className="quantity">{groceryItem.itemQuantity}</td>
        <td className="check"></td>
      </tr>
    );
}

export default Item;
