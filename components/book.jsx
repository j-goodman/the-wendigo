var React = require('react');
var ReactDOM = require('react-dom');
var population = require('../fighter.js');
var arsenal = require('../weapons.js');
var player = require('../player.js');

var Book = React.createClass({
  getInitialState: function () {
    return {input: "", command: "", player: player}
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({ command: this.state.input });
    this.setState({ input: '' });
    this.updateInput(e);
  },

  updateInput: function(e) {
    this.setState({ input: e.currentTarget.value });
  },

  resetCommand: function() {
    if (this.state.command !== "") {
      this.setState({command: ""})
    }
  },

  componentDidMount: function () {
    this.state.player.callback = this.resetCommand;
  },

  render: function () {
    return (<div className="book group">

      <div className='where-pane'>
        {this.state.player.getContentWhere(this.state.command)}
      </div>

      <div className='who-pane'>
        {this.state.player.getContentWho(this.state.command)}
      </div>

      <br />

      <form id='what-book' onSubmit={this.handleSubmit}>
        <input
          autoComplete='off'
          id='inp'
          className='what-pane'
          onChange={this.updateInput}
          type='text'
          value={this.state.input}
        ></input>
      <input className='what-submit' type='submit' name=''></input>
      </form>

    </div>);
  }
});

var shades = "▓▒░";
module.exports = Book;
