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
<div className='modal-background' onClick={ (e)=> {this.onClose(e)} }>
  <div className='profile-background'>
    <div style={ footerStyle }>
      <img className='modal-img' src={ this.props.imageModal } alt="modal image" /> { this.props.nameModal } { this.props.roleModal } { this.props.biographyModal }
      <div onClick={ (e)=> {this.onClose(e)} } >Close</div>
    </div>
  </div>
</div>
    )
  }
}


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