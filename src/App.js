import React from 'react';
import Flashcards from "./Flashcards";
import { Container, Header, Segment, Icon, Button, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, front: "Question", back: "Answer", },
      { id: 2, front: "Jack", back: "Dog", },
      { id: 3, front: "Blake", back: "Husband", },
    ],
  };
  
  render() {
    return(
      <Container>
        <Header as="h1">React Flashcards</Header>
        <Flashcards cards={this.state.flashcards} />
      </Container>
    )
  }
}

export default App;
