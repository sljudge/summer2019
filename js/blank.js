class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  
  handleChange(userInput){
    this.setState({
      input: userInput
    })
  };

  submitMessage(){
    const currentInput = this.state.input;
    this.setState({
      input: '',
      messages: [...messages, currentInput]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input type='text' onChange={this.handleChange} value={this.state.input}/>
        <button onClick={submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map(item => <li>{item}</li>)}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};