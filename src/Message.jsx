import './Message.css';
import { FaStar, FaRegStar, FaCheckCircle } from 'react-icons/fa';

export default function Message({name, stars, review}) {
    
    return (
        <div className='message-card'>
            <div className="stars">
                {Array.from({ length: stars }, (_, i) => (
                i < stars ? (
                <FaStar key={i} color="#FFD700" />  // filled star
                ) : (
                <FaRegStar key={i} color="#FFD700" /> // empty star
                )
            ))}
                    </div>
                    <div className='d-flex justify-content-left gap-2 align-items-center '><h6>{name}</h6><FaCheckCircle className='fs-3' style={{color: "green"}}/> </div>
                    <p className='fs-5 review-text'>{review}</p>
            </div>
    );

}