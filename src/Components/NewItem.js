import '../css/custom-stylesheet.css';

import React, {useState, useEffect, useRef} from 'react';

/**
 * Component which inludes one row in the table of parent component(App.js).
 * In the row there are information on the grocery item:
 * the number of the item, name, and quantity.
 * This component is replaced by EditItem-component when user enters "edit mode"
 *
 * @param {*} props
 */
function NewItem(props){

    const [groceryItem, setGroceryItem] = useState({});
    const [itemIndex, setItemIndex] = useState(null);

    // ref for the root element for the Item component
    const itemContainer = useRef(null);

    useEffect(() => {
        setGroceryItem(props.item);
        setItemIndex(props.number - 1);
    }, [props]);

    /**
    * Function to handle click on grocery item name element, sends data back to GroceryList-element,
    * data indicates which Item-element is to be rendered as EditItem-element instead
    * based on its index number on the list, the index is known by the props given to this element.
    * "element" attribute tells editItem component which input field to focus first,
    * this is based on which table cell the user double clicks
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
    * "element" attribute tells editItem component which input field to focus first,
    * this is based on which table cell the user double clicks
    */
    function handleItemQuantityClick(){
        props.dataFromItem({
            itemIndex: itemIndex,
            element: "QUANTITY"
        });
    }
    /*
    return(
      <tr ref={itemContainer}>
        <td className="number">{props.number}</td>
        <td
        className="name"
        onDoubleClick={handleItemNameClick}
        >
        <p className="overflowContainer">
        {groceryItem.itemName}
        </p>
        </td>

        <td
        className="quantity"
        onDoubleClick={handleItemQuantityClick}
        >
        <p className="overflowContainer">
        {groceryItem.itemQuantity}
        </p>
        </td>
        <td className="check"></td>
      </tr>
    );*/

    return(
      <div className="newItemContainer">
      </div>
    );
}

export default Item;
