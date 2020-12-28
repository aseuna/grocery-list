import '../CustomStylesheet.css';

import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';


function Item(props){

  const [groceryItem, setGroceryItem] = useState({});
  const [itemIndex, setItemIndex] = useState(null);

  useEffect(() => {
    setGroceryItem(props.item);
    setItemIndex(props.number - 1);
  }, [props]);

  function editButtonClick(){
    props.editModeIndexFromItem(itemIndex);
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
