import React, { Component } from "react";
import ReactDOM from "react-dom";


class Portal extends Component {
  componentDidMount() {
    /*var p = this.props.id && document.getElementById("wrap-"+this.props.id);
    if (!p) {
      var p = document.createElement('div');
      p.id = "wrap-"+this.props.id;
      document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();*/
  }
  componentWillUnmount() {
    /*if(this.portalElement) {
      document.body.removeChild(this.portalElement);
    }*/
    document.body.removeChild(this.defaultNode);
  }
  componentDidUpdate() {
    /*if(this.portalElement) {
      ReactDOM.render(<div ref={(ref)=>{ this.domOb=ref; }} {...this.props}>{this.props.children}</div>, this.portalElement);
    }*/
  }
  render()
  {
    if(!this.defaultNode) {
      this.defaultNode = document.createElement('div');
      //this.defaultNode.className='evaBlocksEditor';
      document.body.appendChild(this.defaultNode);
    }
    return ReactDOM.createPortal(this.props.children,this.defaultNode)
  }
}
export default Portal;
