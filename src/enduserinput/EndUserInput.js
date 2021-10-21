import { useState , useEffect , useRef} from 'react';
import data from '../components/am-strategic-cards/AMStrategicCards.json';
function EndUserInput () {
    const [ productName , setProductName ] = useState('');
    const [ ProductAmount , setProductAmount ] = useState('');
    const [ endDate , setEndDate ] = useState('');
    const [ productImage , setProductImage ] = useState('./card1.png');
    const onProductNameChange = e =>{
        setProductName(e.target.value)
    }
    const onProductAmountChange = e =>{
        setProductAmount(e.target.value)
    }
    const onEndDateChange = e =>{
        setEndDate(e.target.value)
    }
    const onImageChange = e =>{
        setProductImage()
    }
    console.log(endDate,'enddate')
    console.log(new Date(endDate).getTime(),'user')
    return(
        <div>
            {/* <img src = {productImage} /> */}
         <form>
             <div>
                 <span>
                     Product Name :
                 </span>
                 <input 
                  type = "text"
                  value = {productName}
                  onChange = {onProductNameChange}
                  />
             </div>
             <div>
                 <span>
                     Product Amount :
                 </span>
                 <input 
                  type = "text"
                  value = {ProductAmount}
                  onChange = {onProductAmountChange}
                  />
             </div>
             <div>
                 <span>
                     Auction End Date :
                 </span>
                 <input 
                  type = "datetime-local"
                  value  = {endDate}
                  onChange = {onEndDateChange}
                  />
             </div>
             <div>
                 <span>
                     Product Image :
                 </span>
                 <input 
                  type = "file"
                  value ={productImage}
                  onChange = {onImageChange}
                  />
             </div>
         </form>
         <EndUserDataDisplay end = {endDate}/>
         <UsersInfo productName = {productName} ProductAmount = {ProductAmount} productImage = {productImage} />
         <JsonData productName = {productName}/>
         {/* {console.log(productImage)} */}
        </div>
    )
}

export default EndUserInput


export const EndUserDataDisplay = ({end}) =>{
    const [ days , setDays ] = useState('00');
    const [ hours , setHours ] = useState('00');
    const [ minutes , setMinutes ] = useState('00');
    const [ seconds , setSeconds ] = useState ('00');
    let interval = useRef();
    const startTimer = () =>{
        const countDownDate = new Date 
        // ('September 30, 2021 11:02:00')
        (end)
        .getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const gap = countDownDate - now;
            const daysGap = Math.floor(gap/(1000*60*60*24));
            const hoursGap = Math.floor((gap%(1000*60*60*24)/(1000*60*60)));
            const minutesGap = Math.floor((gap%(1000*60*60)/(1000*60)));
            const secondsGap = Math.floor((gap%(1000*60))/1000);
          if(gap < 0){
              clearInterval(interval.current)
          }else{
              setDays(daysGap);
              setHours(hoursGap)
              setMinutes(minutesGap)
              setSeconds(secondsGap)
          }
        }, 1000);
    }
    useEffect(()=>{
        startTimer();
        return () =>{
            clearInterval(interval.current)
        }
         
    },[]
    )
    return (
        <div>
           ends in -{

        //    isNaN(`${days}:${hours}:${minutes}:${seconds}`)? <div>00</div>:
        //    `${days}:${hours}:${minutes}:${seconds}`
        // console.log(isNaN(`${days}:${hours}:${minutes}:${seconds}`)?"true":"flase")
           }
        </div>
    )
}
 const JsonData = ({productName}) =>{
    const json = [
        {
            "name" :productName
        }
    ]
    const onSetting = () =>{
        sessionStorage.setItem('value','settingValue')
    }
    const onGetting = () =>{
      const c =  sessionStorage.getItem('value')
        console.log(c)

    }
    return(
        <div>
 {
     json.map(data =>{console.log(data.name,'json')})
 }
 <button onClick={onSetting}>set</button>
 <button onClick={onGetting}>get</button>
        </div>
    )
}

const UsersInfo = ({productName , ProductAmount , productImage}) =>{
 const [ list , setList] = useState([]);
 const onSubmit = () =>{
     setList([...list,
        // ...data.cards,
        {"name":productName,"amount":ProductAmount , "image" :productImage}])
 }
    return(
        <div>
 <button onClick = {onSubmit}>add</button>

 {
     list.map(list =><div>{list.name}----{list.amount}</div>

     )
 }
 {
     list.map(list => <img src ={list.image}/>)
 }
        </div>
    )
}


  