import './styles/style.css'
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';
import Services from './components/Services';

function App() {
  return (
    <div>
      <header className='bg-gradient-to-r from-white to-purple-300'>
        <NavMenu />
        <Banner />
      </header>
      <Services />
    </div>
  );
}

export default App;
