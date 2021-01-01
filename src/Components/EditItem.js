import '../custom-stylesheet.css';

import React, { useState, useEffect, useRef } from 'react';
import onClickOutside from "react-onclickoutside";

/**
 * Component which includes two input fields inside the table. 
 * The first input is for the name of the grocery item(s),
 * and the second for the quantity of previous item(s).
 * The component is rendered in the table when user enters "edit mode",
 * and it replaces Item-component in the table
 * When clicked outside of this component, the data is sent to the parent(App.js)
 * and stored in the replacing Item-component, in the corresponding table cells.
 * 
 * @param {*} props 
 */
function EditItem(props){
    /**
     * states for storing information on grocery items written in input fields
     */
    const [groceryItem, setGroceryItem] = useState({});
    /**
     * references for input elements
     */
    const inputNameRef = useRef(null);
    const inputQuantityRef = useRef(null);

    /**
     * Z-indexes for input fields,
     *  changing z-indexes dynamically makes border glow display properly
     */
    const [nameZ, setNameZ] = useState(1);
    const [quantityZ, setQuantityZ] = useState(1);
    /** 
    * helper flag to show if name input field(or quantity) should be in focus
    * changes base on users click on name or quantity input fields
    */
    const [focusOnName, setFocusOnName] = useState(false);
    
    /**
     * sets grocery item from props to state
     * checks if name-element or quantity element should be focused
     */
    useEffect(() => {
        setGroceryItem(props.item);

        if(props.elementToFocus === "NAME"){
            inputNameRef.current.focus();
            setFocusOnName(true);
        } else {
            inputQuantityRef.current.focus();
            setFocusOnName(false);
        }

    }, [props]);

    /**
     * useEffect hook that checks whether user has clicked on input field,
     * the click changes focusOnName value based on users click,
     * focusOnName value is used to determine z-index values for quantity and name-
     * elements, different z-indexes help display border glow properly
     */
    useEffect(() => {
        if(focusOnName){
            setNameZ(2);
            setQuantityZ(1);
        }else{
            setQuantityZ(2);
            setNameZ(1);
        }
    }, [focusOnName])

    /**
     * the click changes focusOnName value based on users click,
     */
    function handleNameInputClick(){
        setFocusOnName(true);
    }

    /**
     * the click changes focusOnName value based on users click,
     */
    function handleQuantityInputClick(){
        setFocusOnName(false);
    }

    /**
     * function for handling outsideclick event
     * outside click ends "edit mode" and sends data inside input fields to parent component(App.js)
     */
    EditItem.handleClickOutside = () => {
        
        //DummyData is sent to the parent component GroceryList
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
            <td className="name" style={{zIndex: nameZ}}>
                <textarea
                ref={inputNameRef}
                className="tableTextArea"
                wrap="hard"
                defaultValue={groceryItem.itemName}
                onClick={handleNameInputClick}
                />
            </td>
            <td className="quantity" style={{zIndex: quantityZ}}>
                <textarea
                ref={inputQuantityRef}
                className="tableTextArea"
                wrap="hard"
                defaultValue={groceryItem.itemQuantity}
                onClick={handleQuantityInputClick}
                />
            </td>
            <td className="check-empty"></td>
        </tr>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => EditItem.handleClickOutside
  };

export default onClickOutside(EditItem, clickOutsideConfig);
