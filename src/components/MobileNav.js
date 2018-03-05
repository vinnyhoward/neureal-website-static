import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MobileNav extends Component {
  state={ 
    sideMenuOpen: false,
    hamburgerAnimate: false
   }

  slideOpenSideMenu = () => {

    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    })
  
  }

  animateHamburger = () => {
    this.setState({
      hamburgerAnimate: !this.state.hamburgerAnimate
    })
  }
  
  closeMenu = () => {
    this.setState({
      sideMenuOpen: false
    })
  
  }

  render() {
    return (
      <div>
          <div className='menu-icon' onClick={ this.slideOpenSideMenu.bind(this) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={ this.state.sideMenuOpen ? 'sidebar-active' : 'sidebar' }>
            <Link 
             to='/'
             onClick={ this.closeMenu.bind(this) }
             >
            <a href='./index.html'><img src="https://s18.postimg.org/ui0z7yhqx/logo_Asset2.png" alt="logo" className="logo" /></a>
            </Link>
                <ul className='menu'>
                <Link 
                to='/blog'
                onClick={ this.closeMenu.bind(this) }
                ><li><a>Blog</a></li>
                </Link>
                    {/* <li><a>Transparency</a></li> */}
                    <Link 
                    to='/team'
                    onClick={ this.closeMenu.bind(this) }
                    ><li><a href='./team.html'>Team</a></li>
                    </Link>
                    <li><a>Telegram</a></li>
                    <li><a>Whitepaper</a></li>
                    <li><img className='sidebar-image' src='https://s18.postimg.org/5js9ba92h/prediction-side-bar-asset.png' alt="logo" /></li>
                </ul>
                <div className="social-icon">
                <a className='git-mob ion-social-github' href=""></a>
                <a className='fb-mob ion-social-facebook' href=""></a>
                <a className='rdt-mob ion-social-reddit' href=""></a>
                <a className='twi-mob ion-social-twitter' href=""></a>
                <a className='lnk-mob ion-social-linkedin' href=""></a>
                <a className='you-mob ion-social-youtube' href=""></a>
                </div>
            </div>
          <div
           className={ this.state.sideMenuOpen ? 'background-mobile' : 'none' }
           onClick={ this.closeMenu.bind(this) }
          >
          </div>
      </div>
    )
  }
}
