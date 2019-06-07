import React from "react";
import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";
import { Container, Header, Button, Icon, Segment, Card } from "semantic-ui-react";

class Flashcards extends React.Component {
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
    const { flashcards, } = this.state;
    const flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [...this.state.flashcards, flashcard], });
  };

  editCard = (flashcardData) => {
    const flashcards= this.state.flashcards.map( flashcard => {
      if (flashcard.id === flashcardData.id)
        return flashcardData;
      return flashcard;
    })
    this.setState({ flashcards, });
  };

  removeCard = (id) => {
    const flashcards= this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard;
    })
    this.setState({ flashcards, });
  };

  renderCards = () => {
    return this.state.flashcards.map( flashcard => <Flashcard key={flashcard.id} {...flashcard} edit={this.editCard} remove={this.removeCard} />);
  }

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
        <Card.Group itemsPerRow={4}>
          { this.renderCards() }
        </Card.Group>
      </Container>
    )
  }
}

// const Flashcards = ({cards, remove }) => (
//   <Card.Group itemsPerRow={4}>
//     {
//       cards.map(flash_card => (
//         <Flashcard key={flash_card.id} {...flash_card} remove={remove} />
//       ))
//     }
//   </Card.Group>
// )

export default Flashcards;