import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
        <Link to='/' style={{ textDecoration: 'none' }} ><img src="https://s18.postimg.org/dvjeyieex/blue_Asset_1.png" alt="logo" className="logo" /></Link>
                <nav className="nav-menu">
                    <span className="nav-menu__item">Blog</span>
                    {/* <span className="nav-menu__item">Transparency</span> */}
                    <Link to='/team' style={{ textDecoration: 'none' }} ><span className="nav-menu__item"><a href='./team.html'>Team</a></span></Link>
                    <span className="nav-menu__item">Telegram</span>
                        {/* <span className="nav-menu__button"> */}
                    <span className="nav-menu__item-white"><div>Whitepaper</div></span>
                        {/* </span> */}
                </nav>
            </div>
            <Link to='/' style={{ textDecoration: 'none' }} ><div className="mobile-logo-container"><img src="https://s18.postimg.org/dvjeyieex/blue_Asset_1.png" alt="logo" className="mobile-logo" /></div></Link>
      </div>
    )
  }
}
