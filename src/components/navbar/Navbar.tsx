import React from 'react';
import classNames from 'classnames';

import './_navbar.scss';
import { string } from 'prop-types';

export interface Link {
    displayText: string,
    uri: string,
}

export interface NavbarProps {
    displayType?: "narrow" | "wide",
    links: Link[],
}

class Navbar extends React.PureComponent<NavbarProps> {
    render() :React.ReactNode {
        const { displayType, links } = this.props;
        const navbarClasses = classNames('navbar', {[`navbar--${displayType}`]: !!displayType });

        return (
            <div className={navbarClasses}>
                {links.map(link => (<a href={link.uri} className="navbar-link" >{link.displayText}</a>))}
            </div>
        )
    }
}

export default Navbar;