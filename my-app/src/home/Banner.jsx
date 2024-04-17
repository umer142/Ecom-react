import React from 'react'
import { useState } from 'react';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';




const  title =<h2>Search Your One<span>,Thousand</span> of Product</h2>;
const desc = "We have the largest collection of product";
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput, setSearchInput]=useState("");
    const [filteredProduct, setFilteredProduct]=useState(productData);
    //   console.log(productData)
    //  search function 
    const handelsearch = e =>{
        const searchTerm = e.target.value;
        setSearchInput(searchTerm); 


          // filtering product form search 

    const filtered =productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProduct(filtered);

    }

  

  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
                <form >
                    <SelectedCategory Selecte={"all"} />
                    <input type="text"  name='search' id='search' placeholder='Search Your Product' value={searchInput}
                    onChange={handelsearch} />
                    <button type='submit' >
                    <i className="icofont-search"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className="lab-ul">
                    {
                        searchInput && filteredProduct.map((product , i)=> <li key={i}>
                            <Link to={`/shop/${product.id}`} >{product.name}</Link>
                        </li> )
                    }
                </ul>
            </div>
        </div>
     
    </div>
  )
}

export default Banner
