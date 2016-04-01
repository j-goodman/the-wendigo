var React = require('react');
var ReactDOM = require('react-dom');
var population = require('./fighter');
var Book = require('./components/book.jsx');
var Sidebar = require('./components/sidebar.jsx');
var Top = require('./components/top.jsx');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Book></Book>,
    document.getElementById("root")
  );
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Sidebar/>,
    document.getElementById("sidebar")
  );
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Top/>,
    document.getElementById("top")
  );
});
