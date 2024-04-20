import React, { useState, useEffect } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Main from './components/Main';
import Evalution from './components/Evalution';
import ChooseUs from './components/ChooseUs';
import Eligible from './components/Eligible';
import Rating from './components/Rating';
import Funding from './components/Funding';
import Footer from './components/Footer';
import backtotop from './assets/images/png/back-to-top.png';
import Accordian from './components/Accordian';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);

  return (

    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="overflow-hidden">
            <Header />
            <Main />
            <Evalution />
            <ChooseUs />
            <Eligible />
            <Rating />
            <Accordian />
            <Funding />
            <Footer />
            <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(76,87,255,1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-[#fff] border-solid border-[2px] border-[#4C57FF] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
              <img src={backtotop} alt='backtotop' />
            </div>
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;
