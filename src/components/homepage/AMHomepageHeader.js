import React from 'react'
import BackgroundImage from '../../re-usable-components/BackgroundImage'
import AuctionMasterNavbar from '../../re-usable-components/navbar/AuctionMasterNavbar'
import Login from './login/Login'

function AMHomepageHeader() {
    return (
        <div>
            <BackgroundImage>
                <AuctionMasterNavbar/>
                <div style={{display : 'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <h2 style={{flex:'1',fontSize:'40px',color:'#fff',lineHeight:'15vh'}}>
                    Sign up for a virtual demonstration 
with one of our Senior Sourcing 
Consultants to see for yourself 
how easily Scanmarket
                    </h2>
                <div style={{flex:'.8'}}>
                <Login/>
                </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default AMHomepageHeader
