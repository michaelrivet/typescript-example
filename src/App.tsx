import AOS from 'aos';
import React from 'react';

import './App.scss';
import 'aos/dist/aos.css';

AOS.init({
  once: false,
  mirror: true,
});

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="container">
        <div className="container-content container-content--green">
          <div data-aos="fade-up">I am stuff</div>
        </div>
      </div>
      <div className="container">
        <div className="container-content">
          <div data-aos="fade-in">I am more stuff</div>
        </div>
      </div>
      <div className="container">
        <div className="container-content container-content--green">
          <div data-aos="fade-up">I am even more stuff</div>
        </div>
      </div>
    </div>
  );
}

export default App;
