import React from 'react';

class DropTarget extends React.Component {
  componentDidMount() {
    var elem = this.refs.drop_target;
    elem.addEventListener(`${this.props.compatKey}DragEnter`, (e) => {this.props.onDragEnter(e);}, false);
    elem.addEventListener(`${this.props.compatKey}DragLeave`, (e) => {this.props.onDragLeave(e);}, false);
    elem.addEventListener(`${this.props.compatKey}Drop`, (e) => {this.props.onDrop(e);}, false);
  }

  render() {
    return (
      <div ref="drop_target" style={Object.assign({display: 'inline-block'}, this.props.style)}>
        {this.props.children}
      </div>
    );
  }
}

DropTarget.propTypes = {
  children: React.PropTypes.any.isRequired,
  compatKey: React.PropTypes.string,
  onDragEnter: React.PropTypes.func,
  onDragLeave: React.PropTypes.func,
  onDrop: React.PropTypes.func,
  style: React.PropTypes.object,
};

DropTarget.defaultProps = {
  compatKey: 'ddc',
  onDragEnter: () => {console.log('drag enter');},
  onDragLeave: () => {console.log('drag leave');},
  onDrop: () => {console.log('dropped!');},
  style: {},
};

export default DropTarget;
