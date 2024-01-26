import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css'; 
import 'swiper/swiper-bundle.css';
import './App.css';
import './components/script.js';
// ... rest of your imports


function App() {
  return (
    <div>
      <header>

        <div className="header-2">
          <a href="#" className="logo">
            <i className="fa-solid fa-calendar-days"></i>Event Organization Portal
          </a>
          <form action="" className="search-bar-container">
            <input type="search" id="search-bar" placeholder="search here..." />
            <label htmlFor="search-bar" className="fas fa-search"></label>
          </form>
        </div>

        <div className="header-3">
          <div id="menu-bar" className="fas fa-bars"></div>
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#category">events</a>
            {/* <a href="#product">product</a>
            <a href="#deal">deal</a> */}
            <a href="#contact">contact</a>
          </nav>
          <div className="icons">
            {/* <a href="#" className="fas fa-shopping-cart"></a> */}
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-user-circle"></a>
          </div>
        </div>
      </header>

      {/* Home section starts */}
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box" style={{ background: 'url(https://portal.siesgst.ac.in/static/media/TML2023%20-%205.348d1fda.jpg)' }}>
                <div className="content">
                  <span>concert</span>
                  <h3>Glimpses of TML 2023</h3>
                  <a href="#" className="btn">
                    view events
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box" style={{ background: 'url(https://portal.siesgst.ac.in/static/media/TML2023%20-%202.4131164f.jpg)' }}>
                <div className="content">
                  <span>fashion show</span>
                  <h3>Glimpses of TML 2023</h3>
                  <a href="#" className="btn">
                    view events
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat for other swiper slides */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Category section */}
      <section className="category" id="category">
        <h1 className="heading">Recent Events</h1>
        <div className="box-container">
          <div className="box">
            <img src="https://portal.siesgst.ac.in/images/events/1691833434731row-1-column-2-(5)-(1).png" alt="" />
            <div className="content">
              <h3>Agust Queue</h3>
              <a href="#" className="btn">
                view more
              </a>
            </div>
          </div>
          <div class="box">
            <img src="https://portal.siesgst.ac.in/images/events/1691333051206WhatsApp-Image-2023-08-06-at-7.35.41-PM.jpeg" alt=""/>
            <div class="content">
                <h3>Skill Up</h3>
                <a href="#" class="btn">view more</a>
            </div>
        </div>
        <div class="box">
            <img src="https://portal.siesgst.ac.in/images/events/1674020962563WhatsApp-Image-2023-01-18-at-02.47.19.jpeg" alt=""/>
            <div class="content">
                <h3>Cosplay</h3>
                <a href="#" class="btn">view more</a>
            </div>
        </div>
          {/* Repeat for other event boxes */}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="header-1">
          <div className="share">
            <span>follow us</span>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <div className="call">
            <span>call us</span>
            <a href="#">+918692824907</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
