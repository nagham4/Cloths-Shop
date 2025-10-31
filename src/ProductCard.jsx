import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

import './ProductCard.css';
function ProductCard({ image, title, rating, price }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;// Check if there's a half star by seeing if there's a decimal part it works like this 4.5 % 1 = 0.5
  return (
    <Card className='card' >
      <img className='card-img-top' variant="top" src={image} alt={title}/>
      <Card.Body className=' px-1 text-start w-60'>
        <Card.Title>{title}</Card.Title>
        <div className='stars'>
          {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStarSolid} className='star'/>
          ))}
          {halfStar && <FontAwesomeIcon icon={faStarSolid} className='star'/>}
          <Card.Text className='reviews'>{rating}/<span>5</span></Card.Text>
          </div>
          <Card.Text className='price'>${price}</Card.Text>
          </Card.Body>
      </Card>
  );
}

export default ProductCard;

