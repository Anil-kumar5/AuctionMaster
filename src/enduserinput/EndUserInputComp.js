import React, { useState } from "react";
import EndUserInputDataShow from "./EndUserInputDataShow";
import { withRouter } from "react-router-dom";
 function EndUserInputComp ({buyerName}) {
    const [ userName , setUserName ] = useState('');
    const [ productName , setProductName] = useState('');
    const [ productAmount , setProductAmount] = useState('');
    const [ auctionEndDate , setAuctionEndDate ] = useState('');
    const [ productImage , setProductImage] = useState('./upload.png');
    const [ productList , setProductList] = useState([]);
    const [ individual , setIndividual ] = useState('');
    const [ isANumber , setIsANumber ] = useState(false);
   const onUserNameChange = e =>{
       setUserName(e.target.value)
   }
    const onProductNameChange = e => {
        setProductName(e.target.value)
    }
    const onProductAmountChange = e =>{
        setProductAmount(e.target.value)
    }
    const onAuctionEndDate = e =>{
        setAuctionEndDate(e.target.value)
    }
    const imageHandler = e =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setProductImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const individualFun = amount =>{
        setIndividual(amount)
    }
    const onFormSubmit = e =>{
        e.preventDefault();
        if(isNaN(productAmount)){
            setIsANumber(true)
        }else{
            setIsANumber(false)
        }
        setProductList(
            [
                ...productList,
                {   "userName" : userName,
                    "productName" : productName ,
                    "productAmount" : productAmount ,
                    "productEndDate" : auctionEndDate ,
                    "productImage" : productImage,
                    "individualAmount" : individual
                }
            ]
        )
    }
    React.useEffect(()=>{
       const data = localStorage.getItem('list');
       if(data){
           setProductList(JSON.parse(data))
       }
    },[])
      React.useEffect(()=>{
          localStorage.setItem('list',JSON.stringify(productList))
      })
    return (
        <div>
            <div>
                <form onSubmit = {onFormSubmit}>
                    <div>
                        <span>Your Name :</span>
                        <input 
                        type = "text"
                        value = {userName}
                        onChange = {onUserNameChange}
                        />
                        </div>
                    <div>
                        <span>Product Name :</span>
                        <input 
                        type = "text"
                        value = { productName }
                        onChange = {onProductNameChange}
                        />      
                    </div>
                    <div>
                        <span>Product Amount:</span>
                        <input 
                          type = "text"
                          value = {productAmount}
                         onChange = {onProductAmountChange}
                          />
                    </div>
                    <span>
                        {
                            isANumber ? <span>please enter numbers only</span> :null
                        }
                        </span>
                    <div>
                        <span>
                        Auction End Date :
                        </span>
                        <input 
                        type = "datetime-local"
                        value = { auctionEndDate }
                        onChange = {onAuctionEndDate}
                        />
                    </div>
                    <div>
                        <img
                         src={productImage} 
                         alt = "product-image"
                         style={{width:'80px'}}
                         />
                        </div>
                    <div>
                        <input 
                        type = "file"
                        onChange = { imageHandler }
                        />
                    </div>
                    <div>
                        <button type = "submit">Add Product to Auction</button>
                    </div>
                </form>
            </div>
            <div style = {{display:'flex', maxWidth:'100%',flexWrap:'wrap', justifyContent:'space-around'}}>
                {
                    productList.map ( list =>
                        <EndUserInputDataShow 
                        productList = { list } 
                        buyerName = {buyerName} 
                        individualFun = {individualFun}
                        />
                        )
                }
            </div>
        </div>
    )
}

export default withRouter (EndUserInputComp)