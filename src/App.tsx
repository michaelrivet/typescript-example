import AOS from 'aos';
import React from 'react';
import { Container, Visibility, Header, Icon } from 'semantic-ui-react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

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
        <Hero isFullScreen displayType="primary">
          <Container fluid>
            <div data-aos="fade-up">I am primary stuff</div>
          </Container>
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
      </div>
    );
  }
}

export default App;
