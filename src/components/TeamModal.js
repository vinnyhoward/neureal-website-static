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
<div className='modal-background ' onClick={ (e)=> {this.onClose(e)} } >
  <div className='modal-style'>
      <img src={ this.props.imageModal } alt="modal image" /> 
      <div className='modal-detail-padding'>
      <div className='team-name'>{ this.props.nameModal }</div> 
      <div className='team-role'>{ this.props.roleModal }</div> 
      <div className='biography'>{ this.props.biographyModal }</div>
      </div>
    <div style={ footerStyle }>
      {/* <div className='close-modal' onClick={ (e)=> {this.onClose(e)} } >Close</div> */}
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
  minHeight: 500,
  margin: '0 auto',
  padding: 30,
  position: 'relative'
};
const footerStyle = {
  position: 'absolute',
  bottom: 20
};