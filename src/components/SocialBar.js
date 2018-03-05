import React, { Component } from 'react';

const SocialBar = () => {
    return (
<div>
  <nav>
    <div className="main-nav">
      <div className='social-background-nav'>
        <div className="squeeze">
          <span className='social-icons-container'>
            <a className='email-nav ion-email' href="mailto:info@neureal.net"></a>
            <p>info@neureal.net</p>
            <a className='git-nav ion-social-github' href="https://github.com/neureal"></a>
            <a className='fb-nav ion-social-facebook' href="https://www.facebook.com/NeurealAI/"></a>
            <a className='rdt-nav ion-social-reddit' href=""></a>
            <a className='twi-nav ion-social-twitter' href="https://twitter.com/neurealai"></a>
            <a className='lnk-nav ion-social-linkedin' href=""></a>
            <a className='you-nav ion-social-youtube' href=""></a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</div>
    )
}

export default SocialBar;