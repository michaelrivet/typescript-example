import AOS from 'aos';
import React from 'react';
import { Container, Visibility, Header, Icon } from 'semantic-ui-react'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

/*
  Inspriation from http://findmatthew.com/
*/

import './_app.scss';
import 'aos/dist/aos.css';
import 'semantic-ui-css/semantic.min.css';

AOS.init({
  once: false,
  mirror: true,
});

class App extends React.PureComponent {
  state = {
    isFixedHeader: false,
  }

  setHeaderFixed = () => { this.setState({ isFixedHeader: true }) }
  setHeaderNormal = () => { this.setState({ isFixedHeader: false }) }

  render(): React.ReactElement {
    const navbarLinks = [
      {displayText: 'Home', uri: '/', isActive: true},
      {displayText: 'About', uri: '/about/'},
      {displayText: 'Contact', uri: '/contact/'},
    ];

    const footerLinks = [
      {iconId: 'github', uri: 'https://github.com/michaelrivet'},
      {iconId: 'linkedin', uri: 'https://www.linkedin.com/in/mikerivet'},
    ];

    return (
      <div className="App">
        <Navbar links={navbarLinks} isFixed={this.state.isFixedHeader}></Navbar>
        <Visibility
          once={false}
          onBottomPassed={this.setHeaderFixed}
          onBottomPassedReverse={this.setHeaderNormal}
        >
          <Hero isFullScreen displayType="primary" imageUrl="https://picsum.photos/id/6/1920/1080">
            <Header size="huge" color="olive">Michael Rivet</Header>
            <Icon name='angle double down' color="olive" size="large" className="viewMore" />
          </Hero>
        </Visibility>
        <Hero displayType="primary">
          <About/>
        </Hero>
        <Hero displayType="secondary">
          <div data-aos="fade-up">I am secondary stuff</div>
        </Hero>
        <Hero isFullScreen displayType="secondary" imageUrl="https://picsum.photos/id/1/1920/1080">
          <div data-aos="fade-up">I am even more secondary stuff</div>
        </Hero>
        <Hero displayType="inverse">
          <div data-aos="fade-up">I am inverse stuff</div>
        </Hero>

        <Footer links={footerLinks}/>
      </div>
    );
  }
}

export default App;
