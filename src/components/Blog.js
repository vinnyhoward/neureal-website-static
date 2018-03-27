import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SecondaryBlog from './SecondaryBlog';

export default class Blog extends Component {
  render() {
    return (
<div>
  <div className="content">
    <Link to='/what-is-neureal'>
    <div className='blog-header-container'>
      <div className='blog-column__two-thirds'>
        <div className='image-blog-container'>
          <img className='img-main-blog' src="https://image.ibb.co/k2YHTS/neureal_background_final.jpg" alt="blog post" />
        </div>
      </div>
      <div className='blog-column__one-thirds'>
        <div className='blog-detail-container'>
          <div className='title-blog'>What is Neureal?</div>
          <div className='caption-blog'> Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity,
            rather than just trying to crack a useless hash. </div>
          <div className='creator-blog'>
            January 17, 2018
          </div>
        </div>
      </div>
    </div>
    </Link>
    <div className='blog-secondary-grid-container'>
    <Link to='/blockchain-vs-bitcoin'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'Blockchain vs Bitcoin'}
    blogCaption={'It’s 2018 and it’s official: everyone knows about bitcoin.'}
    author={'Eric Nease'}
    blogDate={'January 17, 2018'}
    />
    </Link>
    <Link to='/crypto-wallet'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'What is a Bitcoin Wallet Anyway'}
    blogCaption={'Crypto assets require a fundamental change in how we perceive...'}
    author={'Eric Nease'}
    blogDate={'January 24, 2018'}
    />
    </Link>
    <Link to='/crypto-community-moves-forward'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'Crypto Market Moves Forward Despite FUD'}
    blogCaption={'Has the sky fallen? Has the bubble popped? Is this what...'}
    author={'Eric Nease'}
    blogDate={'January 31, 2018'}
    />
    </Link>

    {/* <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={"Neureal and Vitalik's DAICO"}
    blogCaption={'At the time of this article, there are over 1,400 crypto assets...'}
    author={'Jen Greyson'}
    blogDate={'February 7, 2018'}
    /> */}
    <Link to='/when-does-decentralization-make-sense'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'When Does Decentralization Make Sense'}
    blogCaption={'Whether you’re interested in the wide world of crypto assets...'}
    author={'Eric Nease'}
    blogDate={'February 14, 2018'}
    />
    </Link>
    {/* <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'How crypto is changing the VC game'}
    blogCaption={'In a world where no AI + Blockchain company is fully developed...'}
    author={'Jen Greyson'}
    blogDate={'February 21, 2018'}
    /> */}
    <Link to='/how-to-choose-a-crypto-wallet'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'How to Choose a Crypto Wallet'}
    blogCaption={'Whether you’re interested in the wide world of crypto assets...'}
    author={'Eric Nease'}
    blogDate={'February 28, 2018'}
    />
    </Link>
    {/* <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'Blockchain. 5 Years From Now.'}
    blogCaption={'It’s 2018 and it’s official: everyone knows about bitcoin.'}
    author={'Jen Greyson'}
    blogDate={'March 7, 2018'}
    /> */}
    <Link to='/how-to-tell'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'How to Tell if Your AI Startup'}
    blogCaption={'In a world where no AI + Blockchain company is fully developed...'}
    author={'Eric Nease'}
    blogDate={'March 14, 2018'}
    />
    </Link>
    <Link to='/machine-mind'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/k2YHTS/neureal_background_final.jpg'}
    blogTitle={'The Biological Basis for a Machine Mind'}
    blogCaption={'It is a specialized cell in your nervous system responsible...'}
    author={'Eric Nease'}
    blogDate={'March 21, 2018'}
    />
    </Link>
    </div>
  </div>
</div>
    )
  }
}
