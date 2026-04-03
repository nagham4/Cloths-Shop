import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ProductPreview.css"; // Add custom styles here

export default function ProductPreview({ product }) {
  const initialImage = (product.images && product.images[0]) || product.image || "";
  const [selectedImage, setSelectedImage] = useState(initialImage);

  const productTitle = product.title || "Product";

  return (
    <div className=" py-4 d-flex flex-column flex-md-row" style={{margin: "7rem"}}>
        {/* Left Side - Images */}
        <div className="d-flex gap-3" style={{ width: "50%" }}>
          {/* Thumbnails */}
          <div className="d-flex flex-md-column gap-2" style={{height: "590px"}}>
            {(product.images || []).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`thumbnail-img img-thumbnail ${selectedImage === img ? "selected-thumb" : ""}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow-1">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected product"
                className="main-img img-fluid shadow "
              />
            ) : (
              <div className="main-img bg-light "></div>
            )}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="d-flex flex-column gap-3" style={{ width: "50%" }}>
          <h2 className="fw-bold titlee">{productTitle}</h2>

          {/* Rating */}
          <div className="d-flex align-items-center gap-1 text-warning">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className="star fs-3"
                color={i < Math.round(product.rating || 0) ? "#F59E0B" : "#E5E7EB"}
              />
            ))}
            <span className="text-secondary small ms-1 fs-5">
              {(product.rating || 0).toFixed(1)}/5
            </span>
          </div>

          {/* Price */}
          <div className="d-flex align-items-center gap-2">
            <span className="fs-2 fw-bold newp" >
                ${product.price}
              </span>
            {product.oldPrice && (
              <span className="text-decoration-line-through fs-2 prices" >
                ${product.oldPrice}
              </span>
            )}
            {product.discount && (
              <span className="text-danger fw-semibold discount">{product.discount}</span>
            )}
          </div>

          {product.description && <p className="text-secondary textsec">{product.description}</p>}
          <hr />
          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h5 className="text-secondary textsec">Select Colors</h5>
              <div className="d-flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="color-btn border rounded-circle"
                    style={{ backgroundColor: color ,width: "2.5rem", height: "2.5rem", margin: "1px"}}
                  />
                ))}
              </div>
            </div>
          )}
          <hr />
          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h5 className="text-secondary textsec">Choose Size</h5>
              <div className="d-flex gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    // className={`btn rounded-pill px-3 py-1 ${
                    className={`btn ${
                      size === "Large" ? "btn-dark text-white size" : "size size2"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <div className="d-flex align-items-center gap-3 mt-3">
            <div className="d-flex border rounded-pill counter">
              <div>
                <button className="btn btn-link text-decoration-none px-2 ">-</button>
              </div>
              <div>
                <span className="px-2">1</span>
              </div>
              <div>
                <button className="btn btn-link text-decoration-none px-2">+</button>
              </div>
            </div>
            <button className="btn btn-dark flex-grow-1 rounded-pill add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
    </div>
  );
}
