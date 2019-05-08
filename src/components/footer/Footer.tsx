import React from 'react';
import { Container, Grid, Icon, SemanticICONS } from 'semantic-ui-react';

import './_footer.scss';

export interface FooterLink {
    iconId: string,
    uri: string,
}

export interface FooterProps {
    links: FooterLink[],
}

class Footer extends React.PureComponent<FooterProps> {
    render() :React.ReactNode {
        const { links } = this.props;

        return (
            <Container className="footer">
                <Grid>
                   <Grid.Row>
                       <Grid.Column width={3} className="footer-name">
                            <h3>Michael Rivet</h3>
                            <a href="/">Download Resume</a>
                            <a href="tel:512-962-8225">512-962-8225</a>
                       </Grid.Column>
                       <Grid.Column width={13} className="footer-links">
                            {links.map((link, index) => (
                                <a href={link.uri}><Icon key={index} link name={link.iconId as SemanticICONS} size="large" circular inverted /></a>
                            ))}
                       </Grid.Column>
                    </Grid.Row> 
                </Grid>
            </Container>
        )
    }
}

export default Footer;