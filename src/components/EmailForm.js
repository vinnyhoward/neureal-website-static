import React, { Component } from 'react'

export default class EmailForm extends Component {
state = {
  emailValue: '',
  fNameValue: '',
  lNameValue: '',
}

  render() {
    return (
<div className='email-form-flex'>
  <form action="https://neureal.us17.list-manage.com/subscribe/post" method="POST" noValidate>
    <div className='join'>Join our community</div>
    <input type="hidden" name="u" value="f8e938b21af569b682acfb96a" />
    <input type="hidden" name="id" value="f47cd5d841" />
    <label htmlFor='MERGE0'>
      <input className='subscribe-input' placeholder="Email" type="email" name="EMAIL" id="MERGE0" value={this.state.emailValue}
        onChange={ (e)=> { this.setState({emailValue: e.target.value}); } } autoCapitalize="off" autoCorrect="off" />
    </label>
    <label htmlFor='MERGE1'>
      <input className='subscribe-input' placeholder="First Name" type="text" name="FNAME" id="MERGE1" value={this.state.fNameValue}
        onChange={ (e)=> { this.setState({fNameValue: e.target.value}); } } />
    </label>
    <label htmlFor='MERGE2'>
      <input className='subscribe-input' placeholder="Last Name" type="text" name="LNAME" id="MERGE2" value={this.state.lNameValue}
        onChange={ (e)=> { this.setState({lNameValue: e.target.value}); } } />
    </label>
    <div className='subscribe-button'>
      <div className='subscribe-text' type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe Now</div>
    </div>
  </form>
</div>
) } };
