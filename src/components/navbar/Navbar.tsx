import React from 'react';

import './_navbar.scss';

export interface NavbarProps {
    children: React.ReactChild,
}

class Navbar extends React.PureComponent {
    render() :React.ReactNode {
        return (
            <div className="header">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        )
    }
}

export default Navbar;