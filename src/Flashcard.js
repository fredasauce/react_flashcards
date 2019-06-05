import React from "react";
import { Card, Button, Icon, Header, } from "semantic-ui-react";
import FlashcardForm from "./FlashcardForm";

class Flashcard extends React.Component{
  state = { showBack: true, showForm: false, }

  toggleCard = () => this.setState({ showBack: !this.state.showBack, })

  toggleEdit = () => this.setState({ showForm: !this.state.showForm, })

  render () {
    return (
      <div>
        <Card>
          <Card.Content onClick={this.toggleCard}>
            {this.state.showBack ? <Header>{this.props.front}</Header> : <Header>{this.props.back}</Header> }
          </Card.Content>
          <Card.Content extra>
            <Button.Group floated="right">
              <Button basic color="blue" icon onClick={ this.toggleEdit } >
                <Icon name="edit outline" />
              </Button>
              <Button basic color="red" icon onClick={() => this.props.remove(this.props.id)} >
                <Icon name="trash alternate outline" />
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
        { this.state.showForm ? <FlashcardForm {...this.props} /> : null }
      </div>
    )
  }
}

// const Flashcard = ({ id, front, back, remove }) => (
// )

export default Flashcard;