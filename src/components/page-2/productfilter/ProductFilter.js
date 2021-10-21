import React from 'react';
import { useState, useEffect } from 'react';
import './ProductFilter.css';
import axios from 'axios';
import AMAuctionItems from '../../am-items/AMAuctionItems';
export const ProductData = ({ count, search, sort , firstRange , secondRange , category}) => {
    const [itemData, setItemData] = useState([]);
    const [error, setError] = useState('sfuidxvbhuidgh');
    useEffect(() => {
        axios.get('https://api.npoint.io/f459b30c416327aebc5d')
            .then(res => res.data)
            .then(data => setItemData(data.items))
            .catch(er => setError(er))
            .catch(er => console.log(er))
    }, [])
    // console.log(
    //     itemData
    //         .slice().sort((a, b) => (
    //             sort === "lowest" ?
    //                 ((a.currentBidAmount > b.currentBidAmount) ? 10 : -10) :
    //                 sort === "highest" ?
    //                     ((a.currentBidAmount < b.currentBidAmount) ? 10 : -10) :
    //                     ((a.id > b.id) ? 10 : -10)
    //         ))
    // )
    // console.log(itemData.filter(data => data.type === category),'something')
    // console.log(category != "all" ? itemData.filter(data => data.type === category):`${itemData}`,'filtered')
    return (
        <div className="auction-item-cards-container">
            {
                itemData &&
                itemData
                .filter((item, index) =>
                    index < count
                    &&
                    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    &&
                    (item.currentBidAmount >firstRange && item.currentBidAmount <= secondRange) 
                    &&(category!= "all" &&item.type=== category)
                )

                    .slice()
                    .sort((a, b) => (
                        sort === "lowest" ?
                            ((a.currentBidAmount > b.currentBidAmount) ? 10 : -10) :
                            sort === "highest" ?
                                ((a.currentBidAmount < b.currentBidAmount) ? 10 : -10) :
                                ((a.id > b.id) ? 10 : -10)
                    ))
                // .filter( data =>
                // (data.currentBidAmount >firstRange) && (data.currentBidAmount<=secondRange)
                //     )
                
                    .map(item => (
                        <AMAuctionItems key={item.id} items={item} />

                    )) 

            }
        </div>
    )
}
function ProductFilter() {
    const [count, setCount] = useState(7);
    const [searchValue, setSearchValue] = useState('');
    const [firstRange , setFirstRange] = useState(1000);
    const [secondRange , setSecondRange] = useState(100000);
    const [filterValue , setFilterValue ] = useState(firstRange);
    const [sort, setSort] = useState('');
    const [category , setCategory ] = useState('all');
    const onItemCountChange = e => {
        setCount(e.target.value)
    }
    const onSearchChange = e => {
        setSearchValue(e.target.value)
    }
    const onSortChange = event => {
        setSort(event.target.value)
    }
    const onFirstRangeChange = e =>{
        setFirstRange(e.target.value)
    }
    const onSecondRangeChange = e =>{
        setSecondRange(e.target.value)
    }
    const onCategoryChange = e =>{
        setCategory( e.target.value )
    }
    return (
        <div className="item-filter-container">
            <div className="items-sortby-filter-container">
                <div className="sortby-names">
                    <span className="sortby-header">Sort By : </span>
                    <select className="select-container" onChange={onSortChange}>
                        <option value="latest">Latest</option>
                        <option value="lowest">low to high</option>
                        <option value="highest">high to low</option>
                    </select>
                </div>
                <div className="sortby-count">
                    <span className="sortby-header">Show Items :</span>
                    <select className="select-container" onChange={onItemCountChange}>
                        <option value="7"> 7 </option>
                        <option value="6"> 6 </option>
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                    </select>
                </div>
                <div className="sortby-searching">
                    <input
                        type="text"
                        placeholder="Item Name"
                        className="search-action"
                        onChange={onSearchChange}
                        value={searchValue} />
                    <img src="./search.png" alt="search-icon" />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '60px' }}>
                <div>
                <div className = "slider-range-filter-container">
                    <h3 className = "price-header"> Filter By Price </h3>
                    <hr/>
                    <div className = "range-filter-container">
                      <div className = "range-slider-track"></div>
                      <div className = "range-slider-container">
                          <input
                           type = "range"
                           className = "range-slider slider-one"
                           min = "0"
                           max = "100000"
                           value = {firstRange}
                           onChange = {onFirstRangeChange}
                           />
                           <input
                            type = "range"
                            className = "range-slider slider-two"
                            min = "0"
                            max = "100000"
                            value = {secondRange}
                            onChange = {onSecondRangeChange}
                            />
                          </div> 
                          <div className="price-tag">
                            <span className ="slider-price-tag">Price : </span>  
                            <span  className ="slider-price-tag slider-amount">{firstRange} - {secondRange}</span>
                           </div> 
                        
                    </div>
                    </div>
                    <div>
                        <h3>Categories</h3>
                        <div>
                            <select onChange = { onCategoryChange }>
                                <option value = "all">All</option>
                                <option value = "laptops">Laptop's</option>
                                <option value = "monitors"> Monitor's</option>
                                <option value = "cpu">CPU'S</option>
                            </select>
                        </div>
                    </div>
                    <div className="auction-type-filter">
                        <h3 className='auction-items-filter-header'> Auction Type </h3>
                        <div className="auction-category-action">
                            <div>
                                <input
                                    type="checkbox"
                                    className="checkbox-filter-auction"
                                />
                                <span className="auction-typefilter-descp"> Live Auction </span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className="checkbox-filter-auction"
                                />
                                <span className="auction-typefilter-descp"> Timed Auction </span>
                            </div>
                            <div>
                                <input type="checkbox" className="checkbox-filter-auction" />
                                <span className="auction-typefilter-descp"> Buy Now </span>
                            </div>
                        </div>
                    </div>
                    <div className="auction-items-filter-timeleft">
                        <h3 className="auction-items-filter-header" >Ending Within</h3>
                        <div className="auction-filter-timeduration-action">
                            <div>
                                <input type="checkbox" className="checkbox-filter-auction" />
                                <span className="auction-typefilter-descp">1 Day</span>
                            </div>
                            <div>
                                <input type="checkbox" className="checkbox-filter-auction" />
                                <span className="auction-typefilter-descp">1 Week</span>
                            </div>
                            <div>
                                <input type="checkbox" className="checkbox-filter-auction" />
                                <span className="auction-typefilter-descp">1 Month</span>
                            </div>
                            <div>
                                <input type="checkbox" className="checkbox-filter-auction" />
                                <span className="auction-typefilter-descp">3 Months</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: '.82' }}>
                    <ProductData count={count} search={searchValue} sort={sort} 
                    firstRange = {firstRange}
                    secondRange = {secondRange}
                    category = { category }
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductFilter

