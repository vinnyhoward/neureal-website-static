import React, { Component } from 'react'

export default class TeamModal extends Component {

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if(!this.props.clickOpen) {
      return null;
    }
    return (
<div style={ backDropStyle }>
  <div style={ modalStyle }>
    <div style={ footerStyle }>
      <img src={ this.props.imageModal } alt="modal image" /> { this.props.nameModal } { this.props.roleModal } { this.props.biographyModal }
      <div onClick={ (e)=> {this.onClose(e)} } >Close</div>
    </div>
  </div>
</div>
    )
  }
}

const backDropStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
};
const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative'
};
const footerStyle = {
  position: 'absolute',
  bottom: 20
};