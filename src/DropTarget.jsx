import React from 'react';
import PropTypes from 'prop-types';

class DropTarget extends React.Component {
  constructor(props) {
    super(props);
    this.elem = null;
    this.handleDrop = this.handleDrop.bind(this);
	
	this._dragEnterHandler=(e) => { this.props.onDragEnter(e); };
	this._dragLeaveHandler=(e) => { this.props.onDragLeave(e); };
	this._dragDropHandler=(e) => { this.handleDrop(e);};
  }
  componentWillUnmount() {
	this.elem.removeEventListener(`${this.props.targetKey}DragEnter`, this._dragEnterHandler, false);
	this.elem.removeEventListener(`${this.props.targetKey}DragLeave`, this._dragLeaveHandler, false);
	this.elem.removeEventListener(`${this.props.targetKey}Drop`, this._dragDropHandler, false);
  }
  componentDidMount() {
    this.elem.addEventListener(`${this.props.targetKey}DragEnter`, this._dragEnterHandler, false);
    this.elem.addEventListener(`${this.props.targetKey}DragLeave`, this._dragLeaveHandler, false);
    this.elem.addEventListener(`${this.props.targetKey}Drop`, this._dragDropHandler, false);
  }

  createEvent(eventName, eventData) {
    // utility to create an event
    let e;
    if (typeof window.CustomEvent !== 'function') {
      // we are in IE 11 and must use old-style method of creating event
      e = document.createEvent('CustomEvent');
      e.initCustomEvent(eventName, true, true, {});
    } else {
      e = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    }
    Object.assign(e, eventData);
    return e;
  }

  handleDrop(e) {
    // tell the drop source about the drop, then do the 
    const evt = this.createEvent(`${this.props.targetKey}Dropped`, { dropElem: this.elem, dropData: this.props.dropData });
    e.sourceElem.dispatchEvent(evt);
    this.props.onHit(e);
  }

  render() {
    return (
      <span ref={(t) => { this.elem = t; }}>
        {this.props.children}
      </span>
    );
  }
}

DropTarget.propTypes = {
  children: PropTypes.node.isRequired,

  // needs to match the targetKey in the DragDropContainer
  targetKey: PropTypes.string,

  // data that gets sent back to the DragDropContainer and shows up in its onDrop() callback event
  dropData: PropTypes.object,

  // callbacks
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onHit: PropTypes.func,
};

DropTarget.defaultProps = {
  targetKey: 'ddc',
  onDragEnter: () => {},
  onDragLeave: () => {},
  onHit: () => () => {},
  dropData: {},
};

export default DropTarget;
