import React from 'react';
import shortid from "shortid";
import { DragDropContainer, DropTarget } from '../lib/index';
import gorilla from "./img/gorilla.png";
import puppy from "./img/puppy.png";
import trashcan from "./img/trashcan.png";
import orange from "./img/orange.png";
import pickle from "./img/pickle.png";
import banana from "./img/banana.png";
import surprise from "./img/surprise.png";

class BoxItem extends React.Component {
  // the things that appear in the boxes
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false,
    };
  }

  highlight = () => {
    this.setState({highlighted: true});
  };

  unHighlight = () => {
    this.setState({highlighted: false});
  };

  handleDrop = (e) => {
    e.stopPropagation();
    this.unHighlight();
    this.props.swap(e.dragData.index, this.props.index, e.dragData);
    e.sourceElem.style.visibility="hidden";
  };

  deleteMe = () => {
    this.props.kill(this.props.uid);
  };

  render() {
    const styles = {
      color: 'white',
      borderRadius: 3,
      padding: 5,
      margin: 3,
      display: 'inline-block',
      backgroundColor: '#bbb'
    };
    let outerStyles = {
      paddingLeft: 1,
      marginLeft: 2,
      borderLeft: '3px solid transparent'
    };
    if (this.state.highlighted) {
      outerStyles.borderLeft = '3px solid darkblue';
    }
    return (
        <DragDropContainer
          targetKey="boxItem"
          returnToBase={true}
          dragData={{label: this.props.children, index: this.props.index}}
          onDrop={this.deleteMe}
        >
          <DropTarget
            onHit={this.handleDrop}
            onDragEnter={this.highlight}
            onDragLeave={this.unHighlight}
            targetKey="boxItem"
          >
            <div style={outerStyles}>
              <div style={styles}>{this.props.children}</div>
            </div>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleDrop = (e) => {
    let items = this.state.items.slice();
    items.push({label: e.dragData.label, uid: shortid.generate()});
    this.setState({items: items});
    e.sourceElem.style.visibility="hidden";
  };

  swap = (fromIndex, toIndex, dragData) => {
    let items = this.state.items.slice();
    const item = {label: dragData.label, uid: shortid.generate()};
    items.splice(toIndex, 0, item);
    this.setState({items: items});
  };

  kill = (uid) => {
    let items = this.state.items.slice();
    const index = items.findIndex((item) => {
      return item.uid == uid
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({items: items});
  };

  render() {
    const styles = {
      border: "2px solid black",
      borderRadius: 4,
      width: 400,
      height: 100,
      margin: 10,
      display: 'inline-block',
      position: 'relative',
    };
    // note two layers of DropTarget. This enables it to handle dropped items from outside AND items dragged between boxes.
    return (
      <DragDropContainer dragHandleClassName="grab_me">
        <DropTarget
          onHit={this.handleDrop}
          targetKey={this.props.targetKey}
          dropData={{name: this.props.name}}
        >
          <DropTarget
            onHit={this.handleDrop}
            targetKey="boxItem"
            dropData={{name: this.props.name}}
          >
            <div style={styles}>
              <div className="grab_me" style={{position: 'absolute', bottom: 0, right: 0}}>&times;</div>
              {this.state.items.map((item, index) => {
                return (
                  <BoxItem key={item.uid} uid={item.uid} kill={this.kill} index={index} swap={this.swap}>
                    {item.label}
                  </BoxItem>
                )
              })}
            </div>
          </DropTarget>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

class BoxMe extends React.Component {
  // the things you can drag into a box
  render() {
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        returnToBase={true}
        dragData={{label: this.props.label}}
        customDragElement={this.props.customDragElement}
        onDragStart={()=>(console.log('start'))}
        onDrag={()=>(console.log('dragging'))}
        onDragEnd={()=>(console.log('end'))}
        onDrop={(e)=>(console.log(e))}

      >
        <img src={this.props.image} height="45" style={{ marginLeft: 40}}/>
      </DragDropContainer>
    );
  }
}

export default class DragThingsToBoxesDemo extends React.Component {
  render() {
    return (
      <div>
        <h2>Demo: Drag things into boxes</h2>
        You can also drag between boxes and drag to re-order within boxes, and drag the boxes using the x as a drag handle.
        <div className="things_to_drag">
          <BoxMe targetKey="box" label="bananas"  image={banana}/>
          <BoxMe targetKey="box" label="cheeseburger"  image={surprise} />
          <BoxMe targetKey="box" label="orange" image={orange}/>
          <BoxMe targetKey="box" label="pickle" image={pickle}/>
          <BoxMe targetKey="box" label="gorilla" image={gorilla}/>
          <BoxMe targetKey="box" label="puppy" image={puppy}/>
        </div>
        <div className="boxes">
          <Box targetKey="box"/>
          <br/>
          <Box targetKey="box"/>
        </div>


      </div>
    )
  }
}