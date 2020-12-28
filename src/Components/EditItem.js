import '../CustomStylesheet.css';

import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';


function EditItem(props){

  const [groceryItem, setGroceryItem] = useState({});

  useEffect(() => {
    setGroceryItem(props.item);
  }, [props]);

  return(
      <tr>
        <td className="number">{props.number}</td>
        <td className="name"><input className="tableInput" type="text" default={groceryItem.itemName} /></td>
        <td className="quantity"><input className="tableInput" type="text" default={groceryItem.itemQuantity}/></td>
        <td className="accept"></td>
      </tr>
  );
}

export default EditItem;
