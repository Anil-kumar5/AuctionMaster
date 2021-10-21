import './AMStrategicCards.css';
import data from './AMStrategicCards.json';
function AMStrategicCards (){
    return(
        <div className="auctions-cards-container">
        <div className="cards-content-container">
        <h2 className="auctions-card-description"> Auctions are a Best Practice for Strategic Sourcing </h2>
        <div className="auctions-card-data">
        {
         data.cards.map((item,index) =>{
             return(
                 <div className={index%2===0?"auction-card-content":"auction-card-content odd-card"} style={{backgroundImage: `url(${item.image})`}}> 
                     <div className="auction-card-btn-container">
                       <span className="auctions-card-name">{item.name}</span>
                     <button className="auction-card-button">Click Here</button>
                     </div>
                 </div>
             )
         })
        }
        </div>
    </div>
    </div>
    )
}
export default AMStrategicCards