import React, { Component } from 'react'

export default class TeamProfile extends Component {
  render() {
    return (
      <div className='profile'>
        <img src={require('../images/team/jen.jpg')} alt='jen' />
        <a href='#' className='view'>Jen Greyson</a>
       <div class="details">
       <h2>Jen Greyson<br/><span>CEO</span></h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae commodi in.</p>
       <h3>Follow</h3>
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       <div class='close'><img src={require('../images/close-asset.png')} alt='close' className='close-button' /></div>
        </div>
      </div>
    )
  }
}
