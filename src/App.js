import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Main from './components/Main';
import Evalution from './components/Evalution';
import ChooseUs from './components/ChooseUs';
import Eligible from './components/Eligible';

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <Evalution />
      <ChooseUs />
      {/* <Eligible/> */}
    </div>
  );
}

export default App;
