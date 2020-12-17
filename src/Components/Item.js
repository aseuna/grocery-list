import '../CustomStylesheet.css';

import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';


function Item(props){

  const [groceryItem, setGroceryItem] = useState({});

  useEffect(() => {
    setGroceryItem(props.item);
  }, [props]);

  return(
      <tr>
        <td className="number">{props.number}</td>
        <td className="name">{groceryItem.itemName}</td>
        <td className="quantity">{groceryItem.itemQuantity}</td>
        <td className="edit"><Button variant="outline-info">Edit</Button></td>
      </tr>
  );
}

export default Item;
