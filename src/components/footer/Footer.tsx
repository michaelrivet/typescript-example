import React from 'react';
import { Container, Grid, Icon, SemanticICONS, List } from 'semantic-ui-react';

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
            <footer className="footer">
                <Grid >
                   <Grid.Row>
                       <Grid.Column width={3} className="footer-name">
                            <h3>Michael Rivet</h3>
                            <List link>
                                <List.Item as='a' href="/">Download Resume</List.Item>
                                <List.Item as='a' href="tel:512-962-8225">512-962-8225</List.Item>
                            </List>
                       </Grid.Column>
                       <Grid.Column width={13} className="footer-links">
                            {links.map((link, index) => (
                                <a key={index} href={link.uri} className="footer-links-link"><Icon link name={link.iconId as SemanticICONS} size="large" circular inverted /></a>
                            ))}
                       </Grid.Column>
                    </Grid.Row> 
                </Grid>
            </footer>
        )
    }
}

export default Footer;