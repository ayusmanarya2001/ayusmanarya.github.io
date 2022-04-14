import React from 'react'
import './header.css';

const Header= () => {
  return (
    <div className='max-width header'>
        {/* Zomato-text logo */}
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className='header-logo' />

        {/* Location search-box  */}
        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                    <i className="fi fi-rr-marker absoulte-center location-icon"></i>
                    <div>Bhubaneswar</div>
                    </div>  
                    <i className="fi fi-rr-caret-down absoulte-center"></i>
                </div>
                <div className='location-search-separator'></div>
                <div className='header-searchbar'>
                <i className="fi fi-rr-search absoulte-center search-icon"></i>
                <input placeholder="Search for restaurant, cuisine or a dish" className='search-input' />
                </div>
            </div>
            <div className='profile-wrapper'>
                <img 
                src="https://cdn.dribbble.com/users/689745/screenshots/2763165/media/2296bcb47f2514b0ad582d18bc762c2e.png" alt="Profile" className='header-profile-image'/>
                <span className='header-username'>Ayusman</span>
                <i className="fi fi-rr-caret-down absoulte-center profile-options-icon"></i>
            </div>

        </div>
    </div>
  )
}

export default Header