import Header from './components/Header';
import Gameboard from './components/Gameboard/Gameboard';
import Footer from './components/Footer';
import './assets/styles/custom.css';

function App() {

  return (
    <div className='text-center vh-100 position-relative'>
      <Header />
      <Gameboard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
