import React from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal.jsx';
/**
 * Optional "ghost" node for dragging with DragDropContainer
 */

class DragDropGhost extends React.Component {
  constructor(props) {
	super(props);
	this.state={
	  scroll_top:0,
	  scroll_left:0,
	}
  }
  componentWillReceiveProps(nextProps) {
	console.log('parentNode',this.props.parentNode);
	if(this.props.dragging!==nextProps.dragging && nextProps.dragging) {
	  /*
	  this.setState({
		scroll_top:document.getElementsByTagName("html")[0].scrollTop,
		scroll_left:document.getElementsByTagName("html")[0].scrollLeft,
	  });
	  */
	}
  }
  componentDidMount() {
    this.props.setGhostElem(this.ghostElem);
  }
  

  render() {
	let fix={ left:0, top:0 };

	if(this.props.parentNode) {
	  const par=this.props.parentNode.getBoundingClientRect()
	  fix.left=par.left;
	  fix.top=par.top;
	}
	
	const par=this.props.parentState;
	const scroll={
	  top:this.state.scroll_top,
	  left:this.state.scroll_left,
	};
	console.log('scroll',scroll,par);
	
    const styles = {
      position: 'fixed',
      zIndex: this.props.zIndex,
      left: this.props.parentState.mouse.x-(par.clickX-par.initialLeftOffset)-scroll.left,
      top: this.props.parentState.mouse.y-(par.clickY-par.initialTopOffset)-scroll.top,
      display: this.props.dragging ? 'block' : 'none',
	  pointerEvents:'none',
    };
	if(!this.props.dragging) {
	  return null;
	}
    return (
	  <Portal>
		<div style={styles} ref={(c) => { this.ghostElem = c; }}>
			{this.props.children}
		</div>
	  </Portal>
    );
  }
}

DragDropGhost.propTypes = {
  children: PropTypes.node.isRequired,
  setGhostElem: PropTypes.func.isRequired,
  dragging: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
};

export default DragDropGhost;
