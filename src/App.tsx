import AOS from 'aos';
import React from 'react';
import Container from './components/Container';

import './_app.scss';
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
