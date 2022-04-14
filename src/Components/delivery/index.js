import React from 'react'
import { restaurants } from '../../data/restaurants';
import Filters from '../common/filters'
import DeliveryCollections from './deliveryCollection';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import "./delivery.css"

const deliveryFilters=[
  {
    id:1,
    title:"Filters",
    icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>
  },
  {
    id:2,
    title:"Delivery Time",
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
    id:3,
    title:"Rating 4.0+"
  },
  {
    id:4,
    title:"Safe and Hygenic"
  },
  {
    id:5,
    title:"Pure Veg"
  },
  {
    id:6,
    title:"Great Offers"
  }
];

const restaurantList=restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection 
      list={restaurantList} 
      collectionName='Restaurants in Bhubaneswar' />
    </div>
  )
}

export default Delivery