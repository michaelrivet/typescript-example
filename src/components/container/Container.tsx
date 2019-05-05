import React, { Children } from 'react';
import classNames from 'classnames';

import './_container.scss';

export interface ContainerProps {
    isFullScreen?: boolean,
    displayType: "primary" | "secondary" | "inverse" | "transparent",
    children: React.ReactChild,
}

class Container extends React.PureComponent<ContainerProps> {
    render() : React.ReactNode {
        const { isFullScreen, displayType, children } = this.props;
        const containerClassNames = classNames('container', `container--${displayType}`, {'container--fullscreen': !!isFullScreen});
        return (
            <div className={containerClassNames}>
                {children}
            </div>
        )
    }
}

export default Container;