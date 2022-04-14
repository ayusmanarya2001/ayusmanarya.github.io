import React from 'react'
import "./filterItem.css";

const FilterItem = ({filter}) => {
  return (
    <div className='filter-item'>
        {/* if there is a filter icon then only display it */}
        {filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem