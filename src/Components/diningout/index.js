import React from 'react'
import Collection from '../common/collection'
import {diningOut} from '../../data/diningOut';
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection';
import "./diningout.css"

const colectionList=[
  {
    id:1,
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places:"30 Places",
  },
  {
    id:2,
    title:"Best of Bhubaneswar",
    cover:"https://b.zmtcdn.com/data/collections/5ac5eeae0796f422298ee67d5b66a025_1535368421.jpg",
    places:"19 Places",
  },
  {
    id:3,
    title:"Best Bars & Pubs",
    cover:'https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg',
    places:"11 Places",
  },
  {
    id:4,
    title:"Sweet Tooth",
    cover:"https://b.zmtcdn.com/data/collections/bc0c37f8fc87da896641714b9ef7f0b7_1575621158.jpg",
    places:"8 Places",
  },
  {
    id:5,
    title:"All-Day Dining",
    cover:"https://b.zmtcdn.com/data/collections/f30d0bc1599ed8e9e861774ab98c5974_1625577267.jpeg",
    places:"13 Places",
  },
  {
    id:6,
    title:"Rooftops",
    cover:"https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places:"7 Places",
  },
  {
    id:7,
    title:"Pocket Friendly",
    cover:"https://b.zmtcdn.com/data/collections/cc6ea486370806c8c9b4704f0854e243_1539668755.jpg",
    places:"8 Places",
  },

]

const diningFilters=[
  {
    id:1,
    title:"Filters",
    icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>
  },
  {
    id:2,
    title:"Rating 4.0+"
  },
  {
    id:3,
    title:"Pro Offers",
    icon:<i className="fi fi-rr-angle-small-down absolute-center"></i>
  },
  {
    id:4,
    title:"Outdoor Seating"
  },
  {
    id:5,
    title:"Serves Alcohol"
  },
  {
    id:6,
    title:"Open Now"
  }
];

const diningList= diningOut;

const DiningOut = () => {
  return (
    <div> 
      <Collection list={colectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Bhubaneswar" />
    </div>
  )
}

export default DiningOut