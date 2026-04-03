import React from "react";
import ProductCard from "./ProductCard";
import {Products} from "./Products";

export default function ProductsList({ showAll = false }) {

    const visibleProducts = showAll ? Products : Products.slice(0, 4);


return (
    <div className="container my-5">
    <div className="row g-4">
                {visibleProducts.map((product, index) => (
                    <div key={product.id ?? index} className="col-lg-3 col-md-6 col-12">
                        <ProductCard product={product} />
                    </div>
                ))}
    </div>
    </div>
);
}
