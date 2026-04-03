import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard({ product }) {
  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;

  return (
    <Link to={`/product/${product.id}`} className="block group text-decoration-none text-dark">
      <Card className="card" style={{ cursor: "pointer" }}>
        <img
          className="card-img-top"
          src={product.images[0]}
          alt={product.name}
        />
        <Card.Body className="px-1 text-start w-60">
          <Card.Title>{product.name}</Card.Title>
          <div className="stars">
            {Array.from({ length: fullStars }, (_, i) => (
              <FontAwesomeIcon key={i} icon={faStarSolid} className="star" />
            ))}
            {halfStar && <FontAwesomeIcon icon={faStarSolid} className="star" />}
            <Card.Text className="reviews">
              {product.rating}/<span>5</span>
            </Card.Text>
          </div>
          <Card.Text className="price">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import './ProductCard.css';
// import { Link } from "react-router-dom";

// function ProductCard({product}) {
//     const navigate = useNavigate();
//     const handleClick = () => {
//       navigate(`/product/${product.id}`)
//     }
//     const fullStars = Math.floor(product.rating);
//     const halfStar = product.rating % 1 !== 0;// Check if there's a half star by seeing if there's a decimal part it works like this 4.5 % 1 = 0.5
//   return (
//     <Link to={`/product/${product.id}`} className="block group">
//     <Card className='card' onClick={handleClick} style={{cursor: "pointer"}} >
//       <img className='card-img-top' variant="top" src={product.images[0]} alt={product.title}/>
//       <Card.Body className=' px-1 text-start w-60'>
//         <Card.Title>{product.title}</Card.Title>
//         <div className='stars'>
//           {Array.from({ length: fullStars }, (_, i) => (
//           <FontAwesomeIcon key={i} icon={faStarSolid} className='star'/>
//           ))}
//           {halfStar && <FontAwesomeIcon icon={faStarSolid} className='star'/>}
//           <Card.Text className='reviews'>{product.rating}/<span>5</span></Card.Text>
//           </div>
//           <Card.Text className='price'>${product.price}</Card.Text>
//           </Card.Body>
//       </Card>
//       </Link>
//   );
// }

// export default ProductCard;

