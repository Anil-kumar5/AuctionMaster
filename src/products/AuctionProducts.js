import { Link , Route} from 'react-router-dom';
import VenuTask from '../dropdown/VenuTask';
import Timer from '../Timer/Timer';

function AuctionProducts ({match}) {
    return(
        <div>
      <Link to = "/auction/seller">want to sell</Link><br/>
      <Link>want to buy</Link>
        </div>
    )
}
export default AuctionProducts