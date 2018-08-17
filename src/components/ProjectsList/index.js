import React from 'react';
import { Column } from 'styled-grid-system-component';
import array from 'lodash/collection';
import {
  Card,
  CardBody,
  CardImageHeader,
  CardFooter,
} from 'styled-card-component';
import { Badge } from 'styled-badge-component';

import { projects, tags } from '../../data';
import {
  A,
  CardTitle,
  CardText,
} from '../styled';

class ProjectsList extends React.Component {
  render() {
    const shuffledProjects = array.shuffle(projects);

    const projetcsList = shuffledProjects.map((elem) => {
      const randomImage = array.sampleSize(array.shuffle(elem.imageSource), 1);
      const random3tags = array.sampleSize(elem.tags, 3);

      return (
        <Column
          md={4}
          p="25px"
        >
          <Card
            borderRadius="0"
          >
            <A
              maxWidth={
                randomImage[0].includes('githubusercontent')
                  ? ''
                  : '180px'
              }
              m="auto"
              target="_blank"
              href={elem.link}
            >
              <CardImageHeader
                borderRadius="0"
                src={
                  randomImage[0]
                    ? randomImage[0]
                    : 'http://via.placeholder.com/350x180'
                }
                maxWidth={
                  randomImage[0].includes('githubusercontent')
                    ? ''
                    : '180px'
                }
                m="auto"
              />
            </A>
            <CardBody>
              <CardTitle
                fontSize={21}
                marginBottom={13}
              >
                <A
                  target="_blank"
                  href={elem.link}
                >
                  {elem.name}
                </A>
              </CardTitle>
              <CardText>
                {elem.description}
              </CardText>
            </CardBody>
            <CardFooter>
              {random3tags.map((tagsId) => (
                <Badge
                  dark
                  borderRadius="0"
                  m="5px"
                  p="5px"
                >
                  {tags[tagsId]}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </Column>
      );
    });

    return projetcsList;
  }
}

export {
  ProjectsList,
};
