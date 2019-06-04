import React from "react";
import Flashcard from "./Flashcard";
import { Card, } from "semantic-ui-react";

const Flashcards = ({cards, }) => (
  <Card.Group itemsPerRow={4}>
    {
      cards.map(flash_card => (
        <Flashcard key={flash_card.id} {...flash_card} />
      ))
    }
  </Card.Group>
)

export default Flashcards;