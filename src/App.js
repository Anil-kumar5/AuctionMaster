import './App.css';
import { Route } from 'react-router-dom'
import AMProductData from './components/am-items/AMProductData';
import HomePage from './components/homepage/HomePage';
import Products from './components/page-2/Products';
import Reverse from './components/page-4/Reverse';
import ProductDetails from './components/page-3/ProductInfo';
import Login from './components/homepage/login/Login';
import Slider from './slider/Slider';
import ContextA from './context/ContextA';
import Dropdown from './dropdown/Dropdown';
import ContextB from './context/ContextB';
import DoubleRangeSlider, { SliderC } from './slider/SliderCodepen';
import Timer from './Timer/Timer';
import UserInputTrial from './components/page-2/userinput/UserInputTrial';
import EndUserInput from './enduserinput/EndUserInput';
import VenuTask from './dropdown/VenuTask';
import PreviewImage from './previewBeforeUpload/PreviewImage';
import { EndUserInputComp } from './enduserinput/EndUserInputComp';
import BuyerLogin from './enduserinput/BuyerLogin';
import VenuTaskOne from './dropdown/VenuTaskOne';
import BuyerSignUp from './enduserinput/BuyerSignUp';
import SomeAnother from './venutask/SomeAnother';
import LocalStorage from './localstorage/LocalStorage';
import Search from './venutask/Search';



function App(props) {
  return (
    <div className="App">
    <Route exact path = "/" component={HomePage}/>
    <Route exact path = "/products" component={Products}/> 
    <Route exact path = "/productinfo" component = { ProductDetails}/>
    <Route exact path = "/reverse" component={Reverse}/> 
    <Route exact path = "/login" component = {BuyerLogin} />
    <Route exact path = "/signup" component = {BuyerSignUp} />
      {/* <AMProductData/> */}
      {/* <Slider/> */}
      {/* <ContextA/> */}
      {/* <ContextB/> */}
      {/* <Dropdown/> */}
      {/* <SliderC min={300} max={3000}/> */}
      {/* <Timer/> */}
      {/* <UserInputTrial/> */}
      {/* <EndUserInput/> */}
      {/* <VenuTask/> */}
      {/* <PreviewImage/> */}
      {/* <EndUserInputComp/> */}
      {/* <BuyerLogin/> */}
      {/* <VenuTaskOne/> */}
      {/* <Somu/> */}
      {/* <SomeAnother/> */}
      {console.log(window.location.pathname)}
      {/* <div className = "something">
        <img src="/sidm"/>
        </div>
        <div className = "something">
        <img src = "/gjukdnfg"/>
        </div>
        <div className = "something">
        <img  src="./lfd"/>
      </div>
      {
        console.log(document.getElementsByClassName('something').length)
      } */}
      {/* <LocalStorage/> */}
      {/* <Search/> */}
    </div>
  );
}

export default App;
