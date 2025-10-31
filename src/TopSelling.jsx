import './TopSelling.css';
import ProductsList from './ProductList';
import { useState } from 'react';

export default function TopSelling() {
    const [showAll2, setShowAll2] = useState(false);
  
  return (
    <div style={{marginBottom: "10rem"}}>
      <h2 className='text-center my-3 hh'>TOP SELLING</h2>
      <ProductsList showAll={showAll2}/>
            <button className='btn btn-outline-dark rounded-pill px-5 mt-3 bb fs-5' style={{width: "13.625rem", height: "3.25rem", borderColor: "#c6c1c5ff"}} onClick={()=>{setShowAll2(!showAll2)}}> {showAll2 ? "Show Less" : "View All"}</button>
    </div>
  );
}