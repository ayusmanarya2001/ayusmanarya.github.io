import React, { useState } from 'react'
import Header from '../../Components/common/header';
import TabOptions from '../../Components/common/tabOption';
import Footer from '../../Components/common/footer';
import Delivery from '../../Components/delivery';
import DiningOut from '../../Components/diningout';
import Nightlife from '../../Components/nightlife';
const HomePage = () => {
    const[activeTab,setActiveTab]=useState("Delivery");
  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {/* different screens--this function will decide which screen to show the user out of 3 screens we have */}
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}
const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default:
            return <Delivery/>             
    }
}

export default HomePage;