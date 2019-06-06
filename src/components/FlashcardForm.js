import React from "react";
import { Form, Header } from "semantic-ui-react";

class FlashcardForm extends React.Component {
  state = { front: "", back: "", };
  
  componentDidMount() {
    const { front, back, id } = this.props;
    if (id)
      this.setState({ front, back });
  }

  handleChange = (e, {name, value, }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state });
      this.props.toggleEdit()
    }
    else {
      this.props.add(this.state);  
    }
    this.setState({ front: "", back: "", });
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3" color="green">{ this.props.id ? "Edit Flashcard" : "Create a New Flashcard"}</Header>
        <Form.Group widths="equal">
          <Form.Input 
            fluid
            label="Question"
            placeholder="Question"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            label="Answer"
            placeholder="Answer"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button floated="right" color="green">Submit</Form.Button>
      </Form>
    )
  }
}

export default FlashcardForm;

