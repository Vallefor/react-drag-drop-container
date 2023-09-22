import React from "react";
// var React = require('react');
var ReactDOM = require('react-dom');
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimalsDemo';
import DragThingsToBoxesDemo from './DragThingsToBoxesDemo';


class App extends React.Component {
  render() {
	return (
	  <div>
		<DragFoodToAnimalsDemo/>
		<hr />
		<DragThingsToBoxesDemo/>
		<hr />
		<BasicDragDemo />
	  </div>
	);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
