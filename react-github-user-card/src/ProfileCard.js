import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProfileCard = (props) => {
    console.log("here are the props", props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.user.avatar_url} alt="Card image cap" />
        <CardBody>
            <CardTitle>Name: {props.user.name}</CardTitle>
            <CardSubtitle>UserName: {props.user.login}</CardSubtitle>
          <CardText>Location: {props.user.location}</CardText>
          <CardText>Github Profile: {props.user.url}</CardText>
          <CardText>Followers: {props.user.followers}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileCard;