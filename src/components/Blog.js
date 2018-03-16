import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
<div>
  <div className="content">
    <Link to='/blog-1'>
    <div className='blog-header-container'>
      <div className='blog-column__two-thirds'>
        <div className='image-blog-container'>
          <img className='img-main-blog' src={require( '../images/neureal_background_final.jpg')}  alt="blog post" />
        </div>
      </div>
      <div className='blog-column__one-thirds'>
        <div className='blog-detail-container'>
          <div className='title-blog'>What is Neureal?</div>
          <div className='caption-blog'> Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather than just trying to crack a useless hash. </div>
          <div className='creator-blog'> 
          </div>
        </div>
      </div>
    </div>
    </Link>
    <div className='blog-secondary-grid-container'>
    </div>
  </div>
</div>
    )
  }
}
