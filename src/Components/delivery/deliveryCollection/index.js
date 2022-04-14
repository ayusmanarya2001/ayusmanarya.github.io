import React, { Component } from "react";
import Slider from "react-slick";
import "./deliveryCollection.css";
import PrevArrow from '../../common/carousel/prevArrow';
import NextArrow from '../../common/carousel/nextArrow';
import DeliveryItem from "./deliveryItem";


// i dont have backend data of zomato,hardcoding the values
const deliveryItems=[
    {
        id:1,
        title:"Home Style Food",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:2,
        title:"Biriyani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:3,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:4,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:5,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:6,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:7,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:8,
        title:"Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
        id:9,
        title:"Pasta",
        cover:"https://b.zmtcdn.com/data/o2_assets/9cf8166717d81ec3212d0707a06749f91634401116.png"
    },
    {
        id:10,
        title:"Ice Cream",
        cover:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"
    },
    {
        id:11,
        title:"Paneer",
        cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
        id:12,
        title:"Shake",
        cover:"https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png"
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item}/>
                })}
            </Slider>
        </div>
    </div>
  );
};

export default DeliveryCollections