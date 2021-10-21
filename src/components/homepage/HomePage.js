import React from 'react'
import AuctionMasterFooter from '../../re-usable-components/footer/AuctionMaster-Footer'
import AuctionMasterNavbar from '../../re-usable-components/navbar/AuctionMasterNavbar'
import AMFeatureItems from '../am-items/AMFeatureItems'
import AMProductData from '../am-items/AMProductData'
import AMStrategicCards from '../am-strategic-cards/AMStrategicCards'
import AMHomepageHeader from './AMHomepageHeader'

function HomePage() {
    return (
        <div>
            <AMHomepageHeader/>
           <AMStrategicCards/>
           {/* <AMProductData/> */}
           <AMFeatureItems/>
           <AuctionMasterFooter/>
        </div>
    )
}

export default HomePage
