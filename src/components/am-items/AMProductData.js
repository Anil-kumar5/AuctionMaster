import { useState , useEffect  } from 'react';
import axios from 'axios';
import AMAuctionItems from './AMAuctionItems';
import { withRouter } from 'react-router-dom';
import './AMProduct.css';
function AMProductData ({match}){
    const [itemData , setItemData] = useState([]);
    const [error , setError] = useState('sfuidxvbhuidgh');
    useEffect(() =>{
        axios.get('https://api.npoint.io/e7211c1380a34f5dd0e9')
        .then(res => res.data)
        .then(data => setItemData(data.items))
        .catch(er => setError(er))
        .catch(er => console.log(er))
   },[])
    return(
        <div className="auction-item-cards-container">
                {
                    itemData &&
                    // match.path==='/' &&
                        itemData
                    .filter((items,index) => index<3 )
                    .map(item=>(
                        <AMAuctionItems key={item.id} items={item} />
                    
                    ))
}

{/* {
                      match.path==="/products" &&
                        itemData
                        .map(item=>(
                            <AMAuctionItems key={item.id} items={item} />
                            
                          
                        ))
                    
                } */}
            </div>
    )
}

export default withRouter(AMProductData)