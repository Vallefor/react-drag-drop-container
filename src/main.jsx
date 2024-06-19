import React from "react";
import ReactDOM from 'react-dom/client'
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimalsDemo';
import DragThingsToBoxesDemo from './DragThingsToBoxesDemo';


class App extends React.Component {
	render() {
		return (
			<div>
				<DragFoodToAnimalsDemo/>
				<hr/>
				<DragThingsToBoxesDemo/>
				<hr/>
				<BasicDragDemo/>
			</div>
		);
	}
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
