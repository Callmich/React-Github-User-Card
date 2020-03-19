import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const FollowersCard = (props) => {
    console.log('followerprops',props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.follower.avatar_url} alt="Card image cap" />
        <CardBody>
            <CardTitle>Username: {props.follower.login}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default FollowersCard;