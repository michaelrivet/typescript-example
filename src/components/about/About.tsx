import React from 'react';
import { Grid, Icon, SemanticICONS, Image } from 'semantic-ui-react';
import PageSection from '../pageSection/PageSection';

import './_about.scss';

interface AttentionGrabberProps {
    iconName: SemanticICONS,
    title: string,
    info: string,
}

const AttentionGrabber: React.SFC<AttentionGrabberProps> = (props) => {
    const { iconName, title, info } = props;

    return (
        <div className="attentionGrabber">
            <Icon name={iconName} size="huge" circular inverted color="olive"/>
            <div className="attentionGrabber-title">{title}</div>
            <div className="attentionGrabber-info">{info}</div>
        </div>
    );
}

class About extends React.PureComponent {
    render() :React.ReactNode {
        return (
            <PageSection title="About" subTitle="I am the about section.">
                <Grid className="about">
                   <Grid.Row>
                        <Grid.Column width={4} className="about-callout">
                            <AttentionGrabber 
                                iconName="cloud" 
                                title="Cloud Information" 
                                info="Aenean pretium ac purus sit amet rhoncus. Etiam tincidunt nisl at dolor hendrerit gravida. Integer vel ligula eget arcu euismod." 
                            />
                        </Grid.Column>
                        <Grid.Column width={4} className="about-callout">
                            <AttentionGrabber 
                                iconName="baseball ball" 
                                title="Baseball things" 
                                info="Nunc molestie libero sed massa volutpat lobortis. Proin vulputate placerat risus, vitae facilisis nulla consectetur eu. Suspendisse potenti. Praesent sed." 
                            />
                        </Grid.Column>
                        <Grid.Column width={4} className="about-callout">
                            <AttentionGrabber 
                                iconName="users" 
                                title="Teamwork things" 
                                info="Donec a dolor non turpis sagittis suscipit nec vitae magna. Ut in ultricies nisi, vestibulum hendrerit ante. Proin ut ex." 
                            />
                        </Grid.Column>
                        <Grid.Column width={4} className="about-callout">
                            <AttentionGrabber 
                                iconName="gamepad" 
                                title="Fun things" 
                                info="Praesent ultrices consectetur consectetur. Nunc mollis, erat quis feugiat bibendum, mi metus imperdiet felis, quis dignissim arcu leo sed sem." 
                            />
                        </Grid.Column>
                    </Grid.Row> 
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src="https://picsum.photos/id/103/1920/1080" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h3>Who am I?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam iaculis, cursus erat nec, egestas lorem. Curabitur ex felis, auctor ut nisl sed, dictum euismod sem. Phasellus magna eros, cursus id libero in, fringilla lobortis nisi. Ut at vestibulum ex. Vestibulum non nunc cursus, fringilla ante id, lobortis lectus. Donec nec orci urna. Duis ut suscipit urna, vel dignissim sapien. Cras accumsan nisl eu neque tincidunt fringilla. Aenean condimentum viverra efficitur. In hac habitasse platea dictumst. Quisque vulputate dui tortor, ac vestibulum dolor porta in. Praesent varius semper nibh at varius. Ut lacinia, mi eget euismod elementum, quam ligula elementum nisi, vel suscipit nulla ante eu mauris. Pellentesque interdum fringilla mauris, in condimentum lacus pulvinar at.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </PageSection>
        )
    }
}

export { AttentionGrabber };
export default About;