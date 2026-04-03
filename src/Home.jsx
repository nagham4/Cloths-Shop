
import { Nav } from 'react-bootstrap';
import './App.css'
import Navbar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import Brand from './Brand';
import NewArrivals from './NewArrivals';
import TopSelling from './TopSelling';
import Messages from './Messages';
import Categories from './Categories';

export default function Home(){
    return(
    <div >
        <Navbar />
        <Banner />
        <Brand />
        <NewArrivals />
        <hr className='m-5'/>
        <TopSelling />
        <Categories />
        <Messages />
        <Footer />
    </div >
    );
}
