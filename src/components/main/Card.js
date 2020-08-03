import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Spinner
} from 'reactstrap';

const TheCard = (props) => {
  return (
    <div>
    <CardDeck>
    <Card>
    
      <CardImg top width="100%" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button>Button</Button> <Spinner size="sm" color="primary" />
      </CardBody>
      
    </Card>
    <Card>
      <CardImg top width="100%" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </CardDeck>
   
    </div>
  );
};

export default TheCard;