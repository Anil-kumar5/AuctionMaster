import React from 'react'
import AMProductData from './AMProductData'

function AMFeatureItems() {
    return (
        <div>
            <div className="auction-items-container">
            <h1 className="auction-header">Featured Items</h1>
            <p className="auction-description">Click on submit a bid to submit your bid</p>
            <AMProductData/>
            </div>
        </div>
    )
}

export default AMFeatureItems
