import React from 'react'
import BackgroundImage from '../../re-usable-components/BackgroundImage'
import AuctionMasterNavbar from '../../re-usable-components/navbar/AuctionMasterNavbar'
import AMProductData from '../am-items/AMProductData'


function ProductsHeader() {
    return (
        <div>
                <BackgroundImage>
                    <AuctionMasterNavbar/>
                <h1 style={{fontSize:'42px',fontWeight:'500',color:'#fff'}}>Bid On These Featured Auctions!</h1>
                <div style = {{flexWrap:'nowrap'}}>
                <AMProductData/>
                </div>
                </BackgroundImage>
            
        </div>
    )
}

export default ProductsHeader
