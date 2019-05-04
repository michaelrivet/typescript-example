import React, { Children } from 'react';
import classNames from 'classnames';

import './_container.scss';

export interface ContainerProps {
    isFullScreen?: boolean,
    displayType: "primary" | "secondary" | "inverse" | "transparent",
    imageBackground?: string,
    children: React.ReactChild,
}

class Container extends React.PureComponent<ContainerProps> {
    render() : React.ReactNode {
        const { isFullScreen, displayType, imageBackground, children } = this.props;
        const containerClassNames = classNames('container', {'container--fullscreen': !!isFullScreen});
        const contentClassNames = classNames('container-content', `container-content--${displayType}`)
        return (
            <div className={containerClassNames}>
                <div className={contentClassNames}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Container;