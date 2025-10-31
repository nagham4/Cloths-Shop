import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({showAll}) {
const products = [
    {
    image: "./src/assets/new1.png",
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
    },
    {
    image: "./src/assets/new2.png",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    },
    {
    image: "./src/assets/new3.png",
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    },
    {
    image: "./src/assets/new4.png",
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    },
    {
    image: "./src/assets/top1.png",
    title: "Vertical Striped Shirt",
    rating: 5.0,
    price: 212,
    },
    {
    image: "./src/assets/top2.png",
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    price: 145,
    },
    {
    image: "./src/assets/top3.png",
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: 80,
    },
    {
    image: "./src/assets/top4.png",
    title: "Faded Skinny Jeans",
    rating: 4.5,
    price: 210,
    },
    {
    image: "./src/assets/you1.png",
    title: "Polo with Contrast Trims",
    rating: 4.0,
    price: 212,
    },
    {
    image: "./src/assets/you2.png",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: 145,
    },
    {
    image: "./src/assets/you3.png",
    title: "Polo with Tipping Details",
    rating: 4.5,
    price: 180,
    },
    {
    image: "./src/assets/you4.png",
    title: "Black Striped T-shirt",
    rating: 5.0,
    price: 120,
    }
];
const visibleProducts = showAll ? products : products.slice(0, 4);


return (
    <div className="container my-5">
    <div className="row g-4">
        {visibleProducts.map((product, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12">
            <ProductCard {...product} />
        </div>
        ))}
    </div>
    </div>
);
}
