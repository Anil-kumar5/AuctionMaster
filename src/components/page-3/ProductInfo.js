import React from 'react'
import data from './productInfo.json';
import { Link } from 'react-router-dom';
import './ProductInfo.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import BackgroundImage from '../../re-usable-components/BackgroundImage';
import AuctionMasterNavbar from '../../re-usable-components/navbar/AuctionMasterNavbar';
import AuctionMasterFooter from '../../re-usable-components/footer/AuctionMaster-Footer';
export const ItemInfoCard = () => {
    return (
        <div>
            {
                data.productDetails.map(data => {
                    return (

                        <div className="product-price-card-container">
                            <div className="product-data-container current">
                                <div className="current-price">Current Price</div>
                                <div
                                    className="current-price-amount">
                                    {data.currentPrice}
                                </div>
                            </div>
                            <div className="product-data-container">
                                <div className="product-data-descp">Buyer's Premium</div>
                                <div className="product-data-amnt">{data.preminum}</div>
                            </div>
                            <div className="product-data-container">
                                <div className="product-data-descp">Bid Increment</div>
                                <div className="product-data-amnt">{data.increment}</div>
                            </div>
                            <div className="product-price-card-footer">
                                <input
                                    type="text"
                                    placeholder="Enter you bid amount"
                                    className="bid-amount-entry"
                                />
                                <button className="product-price-card-btn">Submit A Bid</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const ItemDuration = () => {
    return (
        <div className="item-duration-container">
            {
                data.timeLeft.map(data => {
                    return (
                        <div key={data.id}>
                            <h3 className="timer-header">This Auction Ends in :</h3>
                            <div className="item-timeleft">{data.endsin}</div>
                            <div className="duration-hr"></div>
                            <div className="user-live-info">
                                <div className="timer-content-container">
                                    <img src={data.activeIcon} alt="" />
                                    <div className="bid-data-container">
                                        <span className="bid-data">{data.activeBidders}</span>
                                        <div className="timer-descp">Active Bidders</div>
                                    </div>
                                </div>
                                <div className="timer-content-container">
                                    <img src={data.viewersIcon} alt="" />
                                    <div className="bid-data-container">
                                        <span className="bid-data">{data.viewing}</span>
                                        <div className="timer-descp">Watching</div>
                                    </div>
                                </div>
                                <div className="timer-content-container">
                                    <img src={data.bidsIcon} alt="" />
                                    <div className="bid-data-container">
                                        <span className="bid-data">{data.totalBids}</span>
                                        <div className="timer-descp"> Total Bids</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export const ProductAction = () => {
    return (
        <>
            <div className="product-card-action-container">
                <button className="product-submit-btn">Buy Now 50K</button>
                <button className="wishlist-btn">Add To Wishlist</button>
                <span className="card-socialmedia-container">
                    <span className="product-socialmedia-descp">Share to : </span>
                    <img src="./fb.png" alt="" />
                    <img src="./twitter.png" alt="" />
                    <img src="./linkedin.png" alt="" />
                    <img src="./instagram.png" alt="" />
                </span>
            </div>
            <span><Link>View Shipping, Payment & Auction Policies</Link></span>
        </>
    )
}
export function ProductInfo() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ flex: '.8' }}>
                    <ItemInfoCard />
                </div>
                <ItemDuration />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <ProductAction />
            </div>
        </div>
    )
}



export const ProductInformation = () => {
    return (
        <div className="product-info-btn-container">
            <button className="info-btn descp-btn">Description</button>
            <button className="info-btn delivery-btn">Delivery Options</button>
            <button className="info-btn bid-history-btn">Bid History</button>
            <button className="info-btn questions-btn"><Link to="/reverse" style={{ textDecoration: 'none', color: 'black' }}>Questions</Link></button>
        </div>
    )
}
function ProductDetails() {
    return (
        <div>
            <BackgroundImage>
              <AuctionMasterNavbar/>
              <div style={{marginTop:'15vh'}}>
              <ProductInfo/>
              </div>
          </BackgroundImage>
          <div style={{marginTop : '35vh'}}>
            <Carousel />
            </div>
            <ProductFullDetails/>
            <AuctionMasterFooter/>
        </div>
    )
}

export default ProductDetails


export const Carousel = () => {
    const [itemData, setItemData] = useState([]);
    const [error, setError] = useState('sfuidxvbhuidgh');
    const [current, setCurrent] = useState(0);
    const lngth = itemData.length;


    useEffect(() => {
        axios.get('https://api.npoint.io/e7211c1380a34f5dd0e9')
            .then(res => res.data)
            .then(data => setItemData(data.items))
            .catch(er => setError(er))
            .catch(er => console.log(er))
    }, [])
    if (!Array.isArray(itemData) || lngth <= 0) {
        return null
    }
    const nextSlide = () => {
        setCurrent(current === lngth - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? lngth - 1 : current - 1)
    }
    console.log(current)
    console.log(Math.max(lngth),'current')
    
    // window.addEventListener('keydown',checkKey())
    // function checkKey (e) {
    //     if ( e.keyCode === '39'){
    //         nextSlide()
    //     }
    // }
    return (
        <div>
            <div className="carousel">
                {
                    current > 0 &&
                    <img src="./arrow-left.png" className="carousel_button carousel_button-left "
                        onClick={prevSlide}
                    />
                }
                {
                    itemData &&
                    itemData.map((data, index) => {

                        return (
                            <div className="carousel-slide">
                                {
                                    index === current && (
                                        <img src={data.image}
                                            className="carousel-images" />
                                    )
                                }

                            </div>
                        )
                    })
                }
                {
                    current === Math.max(lngth - 1) ? null :
                        <img
                            src="./right-arrow.png"
                            className="carousel_button carousel_button-right"
                            onClick={nextSlide}
                        />
                }
            </div>
             <div style={{marginTop : '10vh'}}>
            <ProductInformation  />
            </div>
        </div>
    )
}

export const ProductFullDetails = () =>{
    return(
        <div style={{padding :' 40px 70px 30px 35px'}}>
            <h2>Product Name</h2>
            <p>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum 
Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 
1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is 
simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an 
unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is simply dummy
text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer 
took a galley of type and scrambled it to make a type specimen book it has?
            </p>
            <p>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum 
Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 
1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is 
simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an 
unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is simply dummy
text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer 
took a galley of type and scrambled it to make a type specimen book it has?
            </p>
            <p>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum 
Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 
1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? 
            </p>
        </div>
    )
}
