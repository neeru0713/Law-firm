import React from 'react'
import GridItem from './GridItem';
const Grid = () => {
  return (
    <div class="area grid grid-auto-rows grid-cols-3 gap-4 mt-8 mx-[23rem]">
      <GridItem itemName="BUSINESS LAW" width="2" />
      <GridItem itemName="Partnership Law" width="1" />
      <GridItem itemName="REAL ESTATE LAW" width="1" />
      <GridItem itemName="BUSINESS LAW" width="2" />
      <GridItem itemName="LANDLORD DISPUTES" width="2" />
      <GridItem itemName="ELDER ABUSE" width="1" />
      
    </div>
  );
}

export default Grid