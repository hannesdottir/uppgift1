import './styles/style.css'
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <header>
        <NavMenu />
        <Banner />
        <p className="text-3xl">Uppgift 1 WIX</p>
      </header>
    </div>
  );
}

export default App;
