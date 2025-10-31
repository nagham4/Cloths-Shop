import Message from "./message";
import './Messages.css';
import { useRef } from "react";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
export default function Messages(){
    const reviews = [
        {
            stars: 4,
            name: "Alex K.",
            review: "Finding cloths that align with my personal style used to be a challenge until I discovered Shop.co The range they offer is truly remarkable. catering to a variety of tastes and occasions."
        },
        {
            name: "Sarah M.",
            review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            stars: 5,
        },
        {
            name: "James L.",
            review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            stars: 5,
        },
        {
    stars: 5,
    name: "Lina A.",
    review:
      "I absolutely love shopping here! The quality of the clothes is amazing, and everything fits exactly as described. I’ve received so many compliments on my outfits from Shop.co!",
  },
  {
    stars: 4,
    name: "Omar H.",
    review:
      "Great variety of styles and fast delivery. I found both casual and formal pieces that suit my taste perfectly. Just wish there were more color options sometimes!",
  },
  {
    stars: 5,
    name: "Rania S.",
    review:
      "This has become my go-to clothing store! The designs are trendy, the fabrics feel premium, and the prices are reasonable for the quality you get.",
  },
  {
    stars: 5,
    name: "Adam B.",
    review:
      "I was really impressed with how easy it was to find stylish clothes that match my personality. Everything arrived quickly and looked exactly like the photos!",
  },
  {
    stars: 4,
    name: "Nour E.",
    review:
      "Beautiful collection and excellent customer service. My only issue was the size chart — but the exchange process was smooth and fast!",
  },
    ]
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === "left"){
            current.scrollBy({left: -350, behavior: "smooth"});
        } else {
        current.scrollBy({left: 350, behavior: "smooth"});
    }};
    return(
        <>
        <div className="d-flex justify-content-between title"
        style={{margin: "3rem 8rem"}}>
        <div ><h1>OUR HAPPY CUSTOMERS</h1></div>
        {/* <div className="position-absolute end-0" */}
            <div className="d-flex"
            style={{alignItems: "center"}}>
            {/* style={{top: "-5rem", marginRight: "3rem"}}> */}
            <button onClick={() => scroll("left")} className="btn btn-primary translate-middle-y"
                style={{ backgroundColor: "white", color: "black", border: "none", fontSize: "2rem"}}>
            <FaArrowLeft />
            </button>
            <button onClick={() => scroll("right")} className="btn btn-primary translate-middle-y"
                style={{ backgroundColor: "white", color: "black", border: "none", fontSize: "2rem"}}>
            <FaArrowRight />
            </button>
            </div>
        </div>
        <div className="position-relative">
            <div 
            ref={scrollRef}
            className="d-flex overflow-auto" 
            style={{
                scrollBehavior: "smooth",
                gap: "1rem",
                scrollbarWidth: "none",
            }}>
                <div className="d-flex gap-4 w-100" style={{marginBottom: "13rem"}}>
            {reviews.map((review, index) =>(
                <div key={index} >
            <Message {...review} />
            </div>
            ))}
            </div>
            </div>
        
        </div>
        </>
    );
}