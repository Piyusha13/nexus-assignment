import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import HomeSlider from './Components/Slider';
import Footer from './Components/footer';
import Header1 from './Components/header1';
import Header2 from './Components/header2';

function App() {
  return (
    <div>
      <Header1/>
      <Header2/>
      <Navbar/>
      <HomeSlider/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
