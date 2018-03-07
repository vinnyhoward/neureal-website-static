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
<div className='modal-background' onClick={ (e)=> {this.onClose(e)} } >
  <div className='modal-style'>
      <img className='modal-image' src={ this.props.imageModal } alt="modal image" /> 
      <div className='modal-detail-padding'>
      <div className='team-name-modal'>{ this.props.nameModal }</div> 
      <div className='team-role-modal'>{ this.props.roleModal }</div> 
      <div className='biography-modal'>{ this.props.biographyModal }</div>
      </div>
    <div style={ footerStyle }>
      {/* <div className='close-modal' onClick={ (e)=> {this.onClose(e)} } >Close</div> */}
    </div>
  </div>
</div>
    )
  }
}

const footerStyle = {
  bottom: 20
};