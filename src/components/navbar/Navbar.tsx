import React from 'react';
import classNames from 'classnames';
import { Menu, SemanticWIDTHSNUMBER } from 'semantic-ui-react'

import './_navbar.scss';

export interface Link {
    displayText: string,
    uri: string,
    isActive?: boolean,
}

export interface NavbarProps {
    links: Link[],
    isSticky?: boolean,
}

class Navbar extends React.PureComponent<NavbarProps> {
    render() :React.ReactNode {
        const { isSticky, links } = this.props;
        const navbarClasses = classNames('navbar', {'navbar--isFixed': !isSticky }, {'navbar--isSticky': !!isSticky });

        return (
            <Menu 
                inverted 
                fixed={!!isSticky ? 'top' : undefined} 
                text={!isSticky} 
                color={!!isSticky ? 'olive' : undefined} 
                widths={links.length > 1 && links.length < 16 ? links.length as SemanticWIDTHSNUMBER : 16} 
                borderless 
                className={navbarClasses}
            >
                { links.map((link, index) => (<Menu.Item key={index} name={link.displayText} href={link.uri} active={link.isActive} />)) }
            </Menu>
        )
    }
}

export default Navbar;