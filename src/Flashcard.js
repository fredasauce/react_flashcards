import React from "react";
import { Card, Button, Icon, } from "semantic-ui-react";

// class Flashcard extends React.Component{
//   state = { [], showForm: true, }

// }

const Flashcard = ({ id, front, back, remove }) => (
  <Card>
    <Card.Content>
      <Card.Header>Question</Card.Header>
      <Card.Description>{front}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color="red" floated="right" icon onClick={() => remove(id)}>
        <Icon name="trash alternate outline" />
      </Button>
    </Card.Content>
  </Card>
)

export default Flashcard;