import React from 'react';
import Flashcards from "./Flashcards";
import FlashcardForm from "./FlashcardForm";
import { Container, Header, Button, Icon, Segment, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, front: "Reese", back: "Daughter", },
      { id: 2, front: "Jack", back: "Dog", },
      { id: 3, front: "Blake", back: "Husband", },
    ],
    showForm: true,
  };
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [...this.state.flashcards, flashcard], });
  };

  removeCard = (id) => {
    const flashcards= this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard;
    })
    this.setState({ flashcards, });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, })

  render() {
    return(
      <Container style={{ paddingTop: "25px", }}>
        <Header as="h1" color="blue" textAlign="center">React Flashcards</Header>
        <br />
        <Segment raised>
          { this.state.showForm ? <FlashcardForm add={this.addFlashcard} /> : null }
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? "angle double up" : "angle double down"} />
          </Button>
        </Segment>
        <br />
        <Flashcards 
          cards={this.state.flashcards} 
          remove={this.removeCard}
        />
      </Container>
    )
  }
}

export default App;
