import { useState, useRef, useEffect } from 'react';

function EndUserInputDataShow({ productList, buyerName }) {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [totalBids, setTotalBids] = useState(0);
    const [buynowAmount, setBuyNowAmount] = useState('');
    const [revisedAmount, setRevisedAmount] = useState(productList.productAmount);
    const [highestBidder, setHighestBidder] = useState(productList.userName);
    const [dataDisplay, setDataDisplay] = useState(true);
    let interval = useRef();
    const startTimer = () => {
        const countDownDate = new Date
            (productList.productEndDate)
            // (2021,08,28,18,47)
            .getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const gap = countDownDate - now;
            const daysGap = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hoursGap = Math.floor((gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutesGap = Math.floor((gap % (1000 * 60 * 60) / (1000 * 60)));
            const secondsGap = Math.floor((gap % (1000 * 60)) / 1000);
            if (gap < 0) {
                clearInterval(interval.current)
                setDataDisplay(false)
            } else {
                setDays(daysGap);
                setHours(hoursGap)
                setMinutes(minutesGap)
                setSeconds(secondsGap)
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }

    }, [])
    const onBuyNowChange = e => {
        setBuyNowAmount(e.target.value)
    }
    const onBidSubmitHandler = () => {
        if (buynowAmount < revisedAmount) {
            alert('enter the value more than current bid')
        } else {
            setRevisedAmount(buynowAmount)
            setTotalBids(totalBids + 1)
            setHighestBidder(buyerName)
            alert('we will notify you , if you are a winner')
        }
    }  
    console.log(localStorage.getItem('list'),'we got the list')
return (
        <div>
            {
        (productList && dataDisplay) && (
            <div className="auction-item-cards-container">
                <div className="auction-cards" >
                    <div className="auction-card-image-container">
                        <img src={productList.productImage}
                            alt="" className="auction-card-images"
                        />
                        <h3 className="auction-item-name">{productList.productName}</h3>
                    </div>
                    <hr />
                    <div className="auction-actions-container">
                        <div className="auction-actions">
                            <img src="./bidicon.png" alt="bid-icon" className="auction-action-image-current" />
                            <div>
                                <div className="auctions-action-name action-current">Current Bid</div>
                                <div className="auctions-action-amount">Rs {revisedAmount}.00</div>
                            </div>
                        </div>
                        <hr />
                        <div className="auction-actions">
                            <img
                             src="./buynow.png"
                              alt="buy-now"
                               className="auction-action-image-buynow" />
                            <div>
                                <div className="auctions-action-name action-buynow">Buy Now</div>
                                {/* <div className="auctions-action-amount">RS {items.buynowBidAmount}.00</div> */}
                                <div>
                                    <input
                                        type="text"
                                        value={buynowAmount}
                                        onChange={onBuyNowChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="bid-duration-count">
                        <span className="bid-time-left">{`${days}days:${hours}hrs:${minutes}mins:${seconds}secs`}</span>
                        <hr className="bid-duration-count-vrline" />
                        <span className="bid-count">{totalBids} <span>{totalBids <= 1 ? "bid" : "bids"}</span></span>
                    </div>
                    <div>
                        <button className="auction-card-btn" onClick={onBidSubmitHandler}>Submit A Bid</button>
                    </div>
                </div>
            </div>
             )
}
{
    !dataDisplay && <ProductShipping highestBidder = { highestBidder }/>
}
{
    console.log(highestBidder)
}
            </div>
       
    )
}

export default EndUserInputDataShow


const ProductShipping = ( { highestBidder}) =>{
    // alert(` congo ${highestBidder} you are the winner`)
    return (
        <div>
       <div>{`congo ${highestBidder} you are a winner,plz enter below details`}</div>
        </div>
    )
}