import './NewArrivals.css';
import ProductsList from './ProductList';
import { useState } from 'react';

export default function NewArrivals() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <h2 className='text-center my-3 hh'>NEW ARRIVALS</h2>
      <ProductsList showAll={showAll}/>
      <button className='btn btn-outline-dark rounded-pill px-5 mt-3 bb fs-5' style={{width: "13.625rem", height: "3.25rem", borderColor: "#c6c1c5ff"}} onClick={()=>{setShowAll(!showAll)}}> {showAll ? "Show Less" : "View All"}</button>
    </div>
  );
}