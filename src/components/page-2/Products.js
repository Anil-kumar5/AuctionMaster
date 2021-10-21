import React from 'react'
import AuctionMasterFooter from '../../re-usable-components/footer/AuctionMaster-Footer'
import ProductFilter from './productfilter/ProductFilter'
import ProductsHeader from './ProductsHeader'


function Products() {
    return (
        <div>
            <ProductsHeader/>
            <div style={{marginTop:'15vh'}}>
            <ProductFilter/>
            </div>
           <AuctionMasterFooter/>
        </div>
    )
}

export default Products
