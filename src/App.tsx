import AOS from 'aos';
import React from 'react';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';

import './_app.scss';
import 'aos/dist/aos.css';

AOS.init({
  once: false,
  mirror: true,
});

const App: React.FC = () => {
  const navbarLinks = [
    {displayText: 'Home', uri: '/'},
    {displayText: 'About', uri: '/about/'},
    {displayText: 'Contact', uri: '/contact/'},
  ];

  return (
    <div className="App">
      <Navbar links={navbarLinks} />
      <Container isFullScreen displayType="primary">
        <div data-aos="fade-up">I am stuff</div>
      </Container>
      <Container isFullScreen displayType="transparent">
        <div data-aos="fade-up">I am more stuff</div>
      </Container>
      <Container  displayType="secondary">
        <div data-aos="fade-up">I am even more stuff</div>
      </Container>
      <Container isFullScreen displayType="inverse">
        <div data-aos="fade-up">I am even more stuff</div>
      </Container>
    </div>
  );
}

export default App;
