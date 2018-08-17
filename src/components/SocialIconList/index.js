import React from 'react';
import { SocialIcon } from 'react-social-icons';

import {
  Span,
  Div,
} from './styled';

class SocialIconList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubHover: false,
      linkedinHover: false,
      twitterHover: false,
      youtubeHover: false,
      hoveredColor: '',
      color1: 'black',
      color2: '#c0c0c0',
    };
  }

  render() {
    const {
      githubHover,
      linkedinHover,
      twitterHover,
      youtubeHover,
      color1,
      color2,
      hoveredColor,
    } = this.state;

    return (
      <Div>
        <Span>
          <SocialIcon
            url="https://github.com/aichbauer"
            color={githubHover ? hoveredColor : color1}
            onMouseEnter={() => this.setState({ githubHover: true })}
            onMouseLeave={() => this.setState({ githubHover: false })}
          />
        </Span>
        <Span>
          <SocialIcon
            url="https://www.linkedin.com/in/lukas-aichbauer-99b920157/"
            color={linkedinHover ? hoveredColor : color2}
            onMouseEnter={() => this.setState({ linkedinHover: true })}
            onMouseLeave={() => this.setState({ linkedinHover: false })}
          />
        </Span>
        <Span>
          <SocialIcon
            url="https://twitter.com/laichbauer"
            color={twitterHover ? hoveredColor : color1}
            onMouseEnter={() => this.setState({ twitterHover: true })}
            onMouseLeave={() => this.setState({ twitterHover: false })}
          />
        </Span>
        <Span>
          <SocialIcon
            url="https://www.youtube.com/channel/UCa_OTzIUK01Su5_v1Dk3Lwg/videos?sort=p&flow=grid&view=0"
            color={youtubeHover ? hoveredColor : color2}
            onMouseEnter={() => this.setState({ youtubeHover: true })}
            onMouseLeave={() => this.setState({ youtubeHover: false })}
          />
        </Span>
      </Div>
    );
  }
}

export {
  SocialIconList,
};
