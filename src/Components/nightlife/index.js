import React from 'react'
import Collection from '../common/collection'
import Filters from '../common/filters'
import {nightLife} from '../../data/nightLife';
import "./nightlife.css"
import ExploreSection from '../common/exploreSection';

const nightFilters = [
  {
    id: 1,
    title: "Filters",
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>
  },
  {
    id: 3,
    title: "Distance",
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
    id: 4,
    title: "Rating 4.0+"
  },
  {
    id: 5,
    title: "Pubs & Bars"
  },
]

const colectionList=[
  {
    id:1,
    title:"Best of Bhubaneswar",
    cover:"https://b.zmtcdn.com/data/collections/5ac5eeae0796f422298ee67d5b66a025_1535368421.jpg",
    places:"19 Places",
  },
  {
    id:2,
    title:"Best Bars & Pubs",
    cover:'https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg',
    places:"11 Places",
  },
  {
    id:3,
    title:"Rooftops",
    cover:"https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places:"7 Places",
  },
]

const nightList=nightLife;

const Nightlife = () => {
  return (
    <div> 
      <Collection list={colectionList}/>
      <div className='max-width'>
        <Filters filterList={nightFilters}/>
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Bhubaneswar"  />
    </div>
  )
}

export default Nightlife
