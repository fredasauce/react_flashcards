import React from "react";
import FlashcardForm from "./FlashcardForm";
import { Card, Button, Icon, Header, } from "semantic-ui-react";

class Flashcard extends React.Component{
  state = { showBack: true, editing: false, };

  toggleCard = () => this.setState({ showBack: !this.state.showBack, })

  toggleEdit = () => {this.setState({ editing: !this.state.editing, })}

  render () {
    return (
      <Card>
        {this.state.editing ? 
          <Card.Content>
            <FlashcardForm 
              {...this.props}
              edit={this.props.edit}
              toggleEdit={this.toggleEdit}
            />
          </Card.Content>
        :
          <Card.Content onClick={this.toggleCard}>
            {this.state.showBack ? <Header>{this.props.front}</Header> : <Header>{this.props.back}</Header> }
          </Card.Content>
          
        }
      
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
    )
  }
}

// const Flashcard = ({ id, front, back, remove }) => (
// )

export default Flashcard;