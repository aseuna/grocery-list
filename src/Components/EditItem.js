import '../custom-stylesheet.css';

import React, { useState, useEffect, useRef } from 'react';
import onClickOutside from "react-onclickoutside";

function EditItem(props){
    /**
     * states for storing information on grocery items written in input fields
     */
    const [groceryItem, setGroceryItem] = useState({});

    const inputNameRef = useRef(null);
    const inputQuantityRef = useRef(null);
    
    /**
     * sets grocery item from props to state
     */
    useEffect(() => {
        setGroceryItem(props.item);
    }, [props]);


    /**
     * function for handling outsideclick event
     */
    EditItem.handleClickOutside = () => {
        /**
         * DummyData is sent to the parent component GroceryList
         */
        let dummyData = {
            editedItemName: inputNameRef.current.value,
            editedItemQuantity: inputQuantityRef.current.value,
            editedEditModeIndex: -1,
            editedItemIndex: props.number - 1
        }
        props.dataFromEditItem(dummyData);
    };

    return(
        <tr>
            <td className="number">{props.number}</td>
            <td className="name">
                <input
                ref={inputNameRef}
                className="tableInput"
                type="text"
                defaultValue={groceryItem.itemName}
                />
            </td>
            <td className="quantity">
                <input
                ref={inputQuantityRef}
                className="tableInput"
                type="text"
                defaultValue={groceryItem.itemQuantity}
                />
            </td>
            <td className="accept"></td>
        </tr>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => EditItem.handleClickOutside
  };

//export default EditItem;
export default onClickOutside(EditItem, clickOutsideConfig);
