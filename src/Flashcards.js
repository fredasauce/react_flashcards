import React from "react";
import { Card, } from "semantic-ui-react";

const Flashcards = ({cards, }) => (
  <Card.Group>
    {
      cards.map(flash_card => (
        <Card>
          <Card.Content>
            <Card.Header>Question</Card.Header>
            <Card.Description>{flash_card.front}</Card.Description>
          </Card.Content>
        </Card>

      ))
    }
    
  </Card.Group>
)

export default Flashcards;