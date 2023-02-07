import './styles/style.css'
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';
import Services from './components/Services';
import Numbers from './components/Numbers';
import About from './components/About';
import ClientReviews from './components/ClientReviews';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header className='bg-gradient-to-r from-white to-purple-300'>
        <NavMenu />
        <Banner />
      </header>
      <Services />
      <Numbers />
      <About />
      <ClientReviews />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
