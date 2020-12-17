import '../CustomStylesheet.css';

import React, {useState, useEffect} from 'react';


function Item(props){

  const [groceryItem, setGroceryItem] = useState({});

  useEffect(() => {
    setGroceryItem(props.item);
  }, [props]);

  return(
      <tr>
        <td>{props.number}</td>
        <td>{groceryItem.itemName}</td>
        <td>{groceryItem.itemQuantity}</td>
      </tr>
  );
}

export default Item;
