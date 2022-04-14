import React from 'react'
import FilterItem from './filterItem';
import "./filters.css";

const Filters = ({filterList}) => {
  return (
    //Mapping out our filtersList to display on our screen
    <div className='filters'>
        {filterList && filterList.map((filter)=>{
            return(
                <FilterItem filter={filter} key={filter.id}/>
            )

        })}

    </div>
  )
}

export default Filters