import Header from './components/Header';
import Gameboard from './components/Gameboard/Gameboard';
import Footer from './components/Footer';
import './assets/styles/custom.css';

function App() {

  return (
    <div className='text-center position-relative' style={{minHeight: "100vh", paddingBottom: "2rem"}}>
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
