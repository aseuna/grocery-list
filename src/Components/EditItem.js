import '../CustomStylesheet.css';

import React, {useState, useEffect, useRef} from 'react';

function EditItem(props){

    const [groceryItem, setGroceryItem] = useState({});
    const [groceryItemName, setGroceryItemName] = useState("");
    const [groceryItemQuantity, setGroceryItemQuantity] = useState("");

    useEffect(() => {
        setGroceryItem(props.item);
    }, [props]);


    return(
        <tr>
            <td className="number">{props.number}</td>
            <td className="name">
                <input className="tableInput" type="text" onChange={e => setGroceryItemName(e.target.value)} />
            </td>
            <td className="quantity">
                <input className="tableInput" type="text" onChange={e => setGroceryItemQuantity(e.target.value)} />
            </td>
            <td className="accept"></td>
        </tr>
    );
}

export default EditItem;
