import React from 'react';
import { Container } from 'semantic-ui-react';

import './_page-section.scss';

export interface PageSectionProps {
    title: string,
    subTitle?: string,
    children: React.ReactChild | React.ReactChild[],
}

class PageSection extends React.PureComponent<PageSectionProps> {
    render() :React.ReactNode {
        const {title, subTitle, children} = this.props;
        return (
            <section className="pageSection">
                <h2 className="pageSection-title">{title}</h2>
                {subTitle && <h4 className="pageSection-subTitle" >{subTitle}</h4>}
                <Container className="pageSection-container">
                   {children}
                </Container>
            </section>
        )
    }
}

export default PageSection;