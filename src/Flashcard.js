import React from "react";
import { Card, Button, Icon, } from "semantic-ui-react";

const Flashcard = ({ id, front, back }) => (
  <Card>
    <Card.Content>
      <Card.Header>Question</Card.Header>
      <Card.Description>{front}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color="red" floated="right" icon>
        <Icon name="trash alternate outline" />
      </Button>
    </Card.Content>
  </Card>
)

export default Flashcard;