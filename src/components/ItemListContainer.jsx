import React from 'react'

export const ItemListContainer = (props) => (
    <div className="itemlistcontainer">
      {props.greeting}
      <ul>
        <li> <a href="#">HATS</a> </li>
        <li> <a href="#">SHIRTS</a> </li>
        <li> <a href="#">SHOES</a> </li>
            
      </ul>
    </div>
  )


export default ItemListContainer