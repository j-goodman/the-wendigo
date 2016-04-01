var React = require('react');
var ReactDOM = require('react-dom');
var population = require('../fighter.js');
var arsenal = require('../weapons.js');
var player = require('../player.js');

var Book = React.createClass({
  getInitialState: function () {
    return {input: "", command: ""}
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.updateInput(e);
    this.setState({ command: this.state.input })
  },

  updateInput: function(e) {
    this.setState({ input: e.currentTarget.value });
  },

  render: function () {
    return <div className="book group">

      <div className='where-pane'>
        {player.getContentWhere(this.state.command)}
      </div>
      <br />
      <div className='who-pane'>
        {player.getContentWho(this.state.command)}
      </div>
      <br />
      <form id='what-book' onSubmit={this.handleSubmit}>
        <input
          autofocus
          id='inp'
          className='what-pane'
          onChange={this.updateInput}
          type='text'
          value={this.state.input}
        ></input>
      <input className='what-submit' type='submit' name=''></input>
      </form>
    </div>;
  }
});

var shades = "▓▒░";
module.exports = Book;
