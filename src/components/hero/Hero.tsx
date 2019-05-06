import React from 'react';
import classNames from 'classnames';

import './_hero.scss';

export interface HeroProps {
    isFullScreen?: boolean,
    displayType: "primary" | "secondary" | "inverse" | "transparent",
    children: React.ReactChild,
    imageUrl?: string,
}

class Hero extends React.PureComponent<HeroProps> {
    render() : React.ReactNode {
        const { isFullScreen, displayType, children, imageUrl } = this.props;
        const heroClassNames = classNames('hero', `hero--${displayType}`, {'hero--fullscreen': !!isFullScreen});
        return (
            <div className={heroClassNames}
                style = {{
                    backgroundImage: 'url(' + imageUrl + ')', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {children}
            </div>
        )
    }
}

export default Hero;