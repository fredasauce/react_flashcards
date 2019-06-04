import React from 'react';
import Flashcards from "./Flashcards";
import FlashcardForm from "./FlashcardForm";
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, front: "Reese", back: "Daughter", },
      { id: 2, front: "Jack", back: "Dog", },
      { id: 3, front: "Blake", back: "Husband", },
    ],
  };
  
  render() {
    return(
      <Container style={{ paddingTop: "25px", }}>
        <Header as="h1" color="blue" textAlign="center">React Flashcards</Header>
        <br />
        <FlashcardForm />
        <br />
        <Flashcards cards={this.state.flashcards} />
      </Container>
    )
  }
}

export default App;
