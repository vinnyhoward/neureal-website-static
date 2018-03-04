import React, { Component } from 'react';

export default class SocialBar extends Component {
  render() {
    return (
      <div>             
          <nav>
          <span className='social-icons-container'>
            <a className='git-nav ion-social-github' href=""></a>
            <a className='fb-nav ion-social-facebook' href=""></a>
            <a className='rdt-nav ion-social-reddit' href=""></a>
            <a className='twi-nav ion-social-twitter' href=""></a>
            <a className='lnk-nav ion-social-linkedin' href=""></a>
            <a className='you-nav ion-social-youtube' href=""></a>
            </span>
          </nav>
      </div>
    )
  }
}
