import React from 'react';
import classNames from 'classnames';

import './_navbar.scss';
import { string } from 'prop-types';

export interface Link {
    displayText: string,
    uri: string,
}

export interface NavbarProps {
    displayType: "default" | "narrow" | "wide",
    links: Link[],
}

class Navbar extends React.PureComponent<NavbarProps> {
    render() :React.ReactNode {
        return (
            <div className="navbar">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        )
    }
}

export default Navbar;