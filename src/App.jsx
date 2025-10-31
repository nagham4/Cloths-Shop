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
function App() {

  return (
    <div className="">
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

export default App
