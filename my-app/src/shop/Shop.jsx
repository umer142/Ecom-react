import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';
const showresult= "Showing  3  -  14  0f   140   Results";

import Data from "../products.json";
import Productcards from './Productcards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const Shop = () => {
    const [GridList,setGridList]=useState(true);
    const [products,setproducts]=useState(Data);

    // Pagination

    const [currentPage,setCurrentPage] =useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastProduct - productsPerPage;
    const currentsProducts = products.slice(indexOfFirstPage,indexOfLastProduct)
        //    function to change the cuurent page 
        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
        //   filter product based on categorey 

        const  [selectedCategory, setSelectedCategory] =useState('All'); 
        const menuItems = [...new Set(Data.map((Val) => Val.category))];
        const filterItem = (curcat) =>{
            const newItem = Data.filter((newVal) =>{
                return newVal.category === curcat;
            });

            setSelectedCategory(curcat);
            setproducts(newItem);
           
            
        }
  return (
   

    <div>
      <PageHeader  title= "Our Shop page"  curPage= "Shop" />
      {/* Shop main ccintent  */}
      <div className="shop-page padding-tb">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* Layout $ Title  */}
                <div className="shop-title  d-flex flex-wrap justify-content-between ">
            <p>    {showresult}</p>
                <div className={`product-view-mode ${GridList ? "gridactive": "listactive"}`}>
                  <a className='grid' onClick={ () => setGridList(!GridList)}>
                    <i className='icofont-ghost'></i>
                  </a>
                  <a className='list' onClick={() =>setGridList(!GridList)}>
                    <i className='icofont-listine-dots'>

                    </i>
                  </a>
                </div>
                </div>
                {/* Product Crads  */}
                <div>
                    <Productcards GridList={GridList} products={currentsProducts} />
                </div>
                <Pagination productsPerPage={productsPerPage}
                totalProducts = {products.length}
                paginate ={paginate}
                activePage= {currentPage}
                />

                
              </article>
            </div>
            <div className="col-lg-4 col-12">
             <aside>
            <Search products={products}  GridList={GridList}/>
            <ShopCategory 
            filterItem={filterItem}
            setItem={setproducts}
            menuItems={menuItems}
            setproducts={setproducts}
            selectedCategory={selectedCategory}
            />
             </aside>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Shop
