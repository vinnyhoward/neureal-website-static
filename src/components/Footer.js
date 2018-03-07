import React, { Component } from 'react';
import EmailForm from './EmailForm';
import { Link } from "react-router-dom";

export default class Footer extends Component { render() { return (
<div className="main-nav">
  <div className='footer-background'>
    <div className="squeeze">
      <div className='footer-container'>

        {/* <Link to='/'>
        <img src={require( '../images/logoAsset2.png')} alt="logo" className="logo-footer" />
        </Link> */}

          <img className='footer-asset'  src={require( '../images/footer-asset.png')} alt=""/>
        <div className='community'>
          <EmailForm />
        </div>
      </div>
    </div>
  </div>
</div>
) } }
