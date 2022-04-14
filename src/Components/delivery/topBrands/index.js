import React from 'react'
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";

const topBrandList = [
    {
        id: 1,
        time: "22min",
        title: "Green Chillyz",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png"
    },
    {
        id: 2,
        time: "30min",
        title: "Burger King",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png"
    },
    {
        id: 3,
        time: "23min",
        title: "WOW! Momo",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/334fc7a8dcd2b4b921c0779c21c43655_1628839459.png"
    },
    {
        id: 4,
        time: "22min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png"
    },
    {
        id: 5,
        time: "38min",
        title: "Subway",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1632395261.png"
    },
    {
        id: 6,
        time: "24min",
        title: "Keventers",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0e5857a0f43acb75517b97b5a29e9138_1625244133.png"
    },
    {
        id: 7,
        time: "37min",
        title: "Adda Unplugged",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b5bd4b19f13623ee1c09460162fb1cb8_1583315109.png"
    },
    {
        id: 8,
        time: "28min",
        title: "Shirose Restaurant",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/93fd1e824cb92fd7a7131174a5804e82_1641276136.png"
    },
];

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings}>
                {topBrandList.map((brand) => {
                    return (
                        <>
                            <div className='top-brands-cover'>
                                <img src={brand.cover} alt={brand.title} className="top-brands-image" />
                            </div>
                            <div className='brand-title-text'>{brand.title}</div>

                        </>
                    );
                })}

            </Slider>

        </div>
    )
}

export default TopBrands