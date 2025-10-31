import './Banner.css';
export default function Banner(){
    return(
        <div className="banner d-flex justify-content-around align-items-center">
        <div className="banner-content">
            <p className='header'>FIND CLOTHS 
                THAT MATCHES 
                YOUR STYLE</p>
            <p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde atque iusto culpa illo corrupti. Cupiditate fuga necessitatibus sed sapiente placeat eveniet dicta beatae ipsa enim sint, modi eum odio!</p>
            <button className="btn-primary rounded-pill py-2 btn-shop">
            Shop Now
        </button>
        <div className="banner-stats d-flex justify-content-between mt-4">
        <div>
            <h2>200+</h2><p className='line'>International Brands</p>
        </div>
        <div>
            <h2>2,000+</h2><p className='line'>High-Quality Products</p>
        </div>
        <div>
            <h2>30,000+</h2><p>Happy Customers</p>
        </div>
        </div>
        </div>
            <img
            alt="fashion models"
            src="./src/assets/banner.png"
        />   
        </div>
    );
}