import React , { useState , useEffect , useRef } from 'react';

function UserInputTrial() {
    const [ productName, setProductName ] = useState('');
    const [ productAmount , setProductAmount ] = useState('');
    const [ auctionEndsDate , setAuctionEndsDate ] = useState('');
    const [ days , setDays ] = useState('00');
const [ hours , setHours ] = useState('00');
const [ minutes , setMinutes ] = useState('00'); 
const [ seconds , setSeconds ] = useState('00'); 
    const onProductNameChange = e =>{
        setProductName(e.target.value)
    }
    const onProductAmountChange = e =>{
        setProductAmount(e.target.value)
    }
    const onAuctionEndsChange = (e) =>{
        setAuctionEndsDate(e.target.value)
    }
    // console.log(productName)
    // console.log(productAmount)
    console.log(auctionEndsDate)
    console.log(new Date(auctionEndsDate).getTime())
    // console.log(new Date().toLocalDateString())
    // const year = new Date().getFullYear();
    // const month = String(new Date().getMonth()+1).padStart(2,'0');
    // const day = new Date().getDate();

    let interval = useRef();
    // const startTimer = () =>{
    //     const countDownDate = new Date(`${month} `)
    // }
     return (
        <div>
            <form>
            <div>
                <span>Product Name:</span>
                <input 
                type = "text"
                value ={productName}
                onChange = {onProductNameChange}
                />
            </div>
            <div>
                <span>
                 Initial Product Amount :
                 <input
                  type = "text"
                  value = {productAmount}
                  onChange = {onProductAmountChange}
                  />
                </span>
            </div>
            <div>
                months:<input type = "text" /><br/>
                days :<input type = "text"/><br/>
                hours : <input type = "text" /><br/>
                minutes:<input type = "text"/><br/>
                </div>
            <div>
                Auction Ends by
                <span>Day</span>
                <input
                 type = "datetime-local"
                 value = {auctionEndsDate}
                 onChange = {onAuctionEndsChange}
                 />
            </div>
            <div>
                <input
                 type ="submit"
                 />
            </div>
            </form>
            {/* {
                new Date(`[${auctionEndsDate}]`)
            } */}
           
        </div>
    )
}

export default UserInputTrial
