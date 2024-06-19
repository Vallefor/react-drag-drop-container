import React from 'react';
import { DragDropContainer, DropTarget } from '../lib/index';
import gorilla from "./img/gorilla.png";
import puppy from "./img/puppy.png";
import trashcan from "./img/trashcan.png";
import orange from "./img/orange.png";
import pickle from "./img/pickle.png";
import banana from "./img/banana.png";
import surprise from "./img/surprise.png";


class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {highlighted: false};
    this.highlight = this.highlight.bind(this);
    this.unHighlight = this.unHighlight.bind(this);
    this.dropped = this.dropped.bind(this);
  }

  highlight() {
    this.setState({highlighted: true});
  }

  unHighlight() {
    this.setState({highlighted: false});
  }

  dropped(e) {
    //e.sourceElem.style.visibility="hidden";
    alert(`Thanks for the ${e.dragData.label}! ${e.dragData.tastes}!`);
    this.setState({highlighted: false});
  }

  render() {
    let styles = {
      padding: 4,
      borderRadius: 30,
      margin: 12,
      backgroundColor: (this.state.highlighted ? 'aqua' : 'transparent')
    };
    return (
      <DropTarget
        onHit={this.dropped}
        onDragEnter={this.highlight}
        onDragLeave={this.unHighlight}
        targetKey={this.props.targetKey}
        dropData={{name: this.props.name}}
      >
        <div style={styles}>
          {this.props.children}
        </div>
      </DropTarget>
    );
  }
}

class Food extends React.Component {
  landedOn(e) {
    console.log('I was dropped on ' + e.dropData.name)
  }

  render() {
    return (
      <DragDropContainer
		/*elementProps={{ style: {display:'block' } }}*/
        targetKey={this.props.targetKey}
        dragClone={this.props.dragClone || false}
        returnToBase={true}
        dragData={{label: this.props.label, tastes: this.props.tastes}}
        customDragElement={this.props.customDragElement}
        onDrop={this.landedOn}
      >
        <img src={this.props.image} height="45" style={{ marginLeft: 40}}/>
      </DragDropContainer>
    );
  }
}

export default class DragFoodToAnimalsDemo extends React.Component {
  render() {
    const customElem = <button>Bananas</button>
    return (
      <div>
        <h2>Demo: Drag the food to the correct animal</h2>
        You can also drag the animal
        <div className="animals">
          <DragDropContainer>
            <Animal targetKey="fruitsAndVeggies" name="Kong">
              <img src={gorilla} width="100"/>
              <h5>I eat fruit</h5>
            </Animal>
          </DragDropContainer>

          <DragDropContainer>
            <Animal targetKey="dogFood" name="Skippy">
              <img src={puppy} width="100"/>
              <h5>I eat meat & pickles</h5>
            </Animal>
          </DragDropContainer>

          <DragDropContainer>
            <Animal targetKey="dogFood" name="Bozo">
              <Animal targetKey="fruitsAndVeggies" name="Bozo">
                <img src={trashcan} width="100"/>
                <h5>I eat everything</h5>
              </Animal>
            </Animal>
          </DragDropContainer>
        </div>
        <div className="foods">
          <Food targetKey="fruitsAndVeggies" label="orange" tastes="Delicious" image={orange}/>
          <Food targetKey="dogFood" label="pickle" tastes="It tasted weird" image={pickle} />
          <Food dragClone={true} targetKey="dogFood" label="cheeseburger" tastes="Yummy" image={surprise}/>
          <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="bananas" tastes="Yummy" image={banana}/>
        </div>
        <ul>
          <li><strong>targetKey</strong> to specify compatible drag items and drop targets.</li>
          <li><strong>dragData</strong> to pass the food name and taste ("Yummy", "Weird").</li>
          <li><strong>onDrop</strong> callback to tell the drag item what it was dropped on (shown in console.log).</li>
          <li><strong>customDragElement</strong> (on the bananas) to drag a custom element.</li>
          <li><strong>dragClone</strong> (on the cheeseburger) to drag a copy.</li>
          <li><strong>returnToBase</strong> to specify whether items return to their original location when released.</li>
          <li><strong>Trick:</strong> Wrap element in multiple DropTargets to handle different types of data with different targetKeys.</li>
        </ul>


      </div>
    )
  }
}
