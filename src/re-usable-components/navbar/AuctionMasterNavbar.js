import './AuctionMasterNavbar.css'; 
import { Link } from 'react-router-dom'; 

import { withRouter } from 'react-router';
function AuctionMasterNavbar ({history}) {
    return(
        <header>
        <div className="navbar-container"> 
            <img src ="./AMlogo.png" 
            alt = "am-logo" 
            className="am-header-logo"
            onClick = { () => history.push('/')}
            /> 
            <nav>
                <ul className="navbar-lists">
                    <li className="nav-list"> <Link className="navbar-list-link" to="/products">PRODUCTS & SERVICES</Link></li>
                    <li className="nav-list"> <Link className="navbar-list-link">CUSTOMER CASES</Link></li>
                    <li className="nav-list"> <Link className="navbar-list-link">COMPANY</Link></li>
                    <li className="nav-list"><button className="nav-btn"><Link className="navbar-list-link" to="/signup">BOOK A DEMO</Link></button></li>
                </ul>
            </nav>  
        </div>
        </header>
    )
} 
export default withRouter( AuctionMasterNavbar)