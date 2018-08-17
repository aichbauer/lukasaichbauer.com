import React from 'react';
import {
  Column,
  Row,
} from 'styled-grid-system-component';

import {
  Gravatar,
  P,
  A,
  Container,
  H1,
  TechIconList,
} from '../../components';

const About = () => (
  <Container>
    <Row textAlign="center">
      <Column md={12}>
        <Row>
          <Column md={12} pt="32px">
            <Gravatar email="l.aichbauer@gmail.com" size={180} />
          </Column>
          <Column md={12} pt="32px">
            <H1>
              Lukas Aichbauer
            </H1>
          </Column>
          <Column md={3} />
          <Column md={6} pt="8px">
            <P>
              I am a full stack developer mostly working with Node.js and Python.
              Currently I am studying MultiMediaTechnology with focus on
              web development and and data science at the Salzburg University
              of Applied Sciences. I will finish my degree in summer of 2018.
              I already have a bachelor
              {"'"}
              s degree in science of engeneering.
              I am passionate about optimizing workflow and automation,
              thus I am working on various open soure projects, that
              help developers to stay focused on code and not on repatative
              tasks that can easily be automated. For example
              <A target="_blank" p="0" ml="4px" mr="4px" href="https://github.com/JPeer264/node-semantic-git-commit-cli/blob/master/README.md">semantic-git-commit-cli</A>
              or
              <A target="_blank" p="0" ml="4px" mr="0" href="https://github.com/aichbauer/node-semantic-git-release-cli/blob/master/README.md">semantic-git-release-cli</A>
              .
            </P>
          </Column>
          <Column md={3} />
          <Column md={3} />
          <Column md={6} pt="8px">
            <P>
              In my spare time I like to play the guitar, or simply listen to music.
              Take a look at my playlists on
              <A target="_blank" p="0" ml="4px" mr="0" href="https://open.spotify.com/user/mr.l.a.">Spotify</A>
              .
              I am into sports, I like running and bouldering is one of my favorite hobbies.
              Honestly, I like every sport that has at least a little bit to do with mountains.
              Maybe it is because I am Austrian. Especially hiking in the mountains during
              spring and summer and snowboarding in the winter time. I realy like to snowboard
              in fresh powder as the first one in the morning on top of the mountains.
            </P>
          </Column>
          <Column md={3} />
          <Row>
            <Column md={12} pt="16px">
              <H1>
                Technologies I use:
              </H1>
            </Column>
            <Column md={2} />
            <Column md={8}>
              <Row pb="16px" pt="16px" m="25px">
                <TechIconList />
              </Row>
            </Column>
            <Column md={2} />
          </Row>
        </Row>
      </Column>
    </Row>
  </Container>
);

export {
  About,
};
