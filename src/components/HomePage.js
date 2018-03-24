import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmailForm from './EmailForm';
import LearnMore from './LearnMore';

export default class HomePage extends Component {
  render() {
    return (
<div>
    <div className="content">
        <div className="flex">
            <div className="column column__one-third">
                <h1 className="content__title">What is Neureal?</h1>
                <p className="content__paragraph">
                    A limitless and infinitely scalable ability to forecast the future.
                    <br/>
                    <br/> That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly
                    gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft.
                    Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a
                    hurricane accurately enough to move vulnerable people out of harm’s way, predict traffic and human patterns
                    accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated
                    to simple, Neureal’s impact is far-reaching.</p>
                <div className='home-button-flex'>
                    <a href='https://drive.google.com/file/d/1foF_O3EBGk6h6tCCx9NPZuUhNUmGLpMv/view?usp=drivesdk' target="_blank">
                        <div className="learn-more-button">
                            <div className='learn-more'>WHITEPAPER</div>
                        </div>
                    </a>
                    <Link to='/roadmap'>
                    <a href='./roadmap.html'>
                        <div className="roadmap-button">
                            <div className='road-map'>ROADMAP</div>
                        </div>
                    </a>
                    </Link>
                </div>
            </div>

            <div className="column column__two-thirds">
                {/* <img  src={require( '../images/Comp_1.gif')} alt="" className="content__image" /> */}
            </div>
        </div>

        <h1 className="content__quote">"Top 20 Most Promising Artificial Intelligence Solution Providers
            <br/> 2017–CIOReview"</h1>


        <div className="flex-columns">

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <div className='info-subtitle-flex'>
                            <a className='info-icon  ion-android-locate ' />
                            <h1 className="content__title">Accuracy</h1>
                        </div>
                        <p className="content__paragraph">Prediction is worthless without accuracy. Our ability to harness compute via blockchain technology,
                            coupled with the ability to create predictors out of novice users creates unsurpassed accuracy.
                        </p>
                    </div>
                </div>
            </div>

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <div className='info-subtitle-flex'>
                            <a className='info-icon  ion-android-checkbox-outline ' />
                            <h1 className="content__title">Proven</h1>
                        </div>
                        <p className="content__paragraph">Folding@home + Bitcoin. Community is far more powerful than individual effort, whether measured inside
                            company structures or global neighborhoods.
                        </p>
                    </div>
                </div>
            </div>

            <div className='padding-header-section'>
                <div className='info-box'>
                    <div className='info-box-container'>
                        <div className='.column-half'>
                            <div className='info-subtitle-flex'>
                                <a className='info-icon  ion-card' />
                                <h1 className="content__title">Incentivized</h1>
                            </div>
                            <p className="content__paragraph">Adding the ability to pay and get paid within an open-source governance incentivizes and rewards
                                all participants, no matter what role they play inside the organism.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='column'>
            <h1 className="as-seen-caption">As seen in</h1>

            <div className='as-seen-container'>
                <img className='as-seen-image' src='https://image.ibb.co/fsb18S/medium_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/j30pv7/bitcoin_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/dz6Uv7/usa_weekly_compressor.jpg' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/jFog8S/steemit_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/b7fB8S/chippin_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/dQ6jTS/cointele_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/hQmJoS/value_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/hzJ3Nn/future_compressor.jpg' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/gmrev7/decentral_market_compressor.png' alt="team" />
                <img className='as-seen-image' src='https://image.ibb.co/mAkNF7/cryptoknight_compressor.jpg' alt="team" />
            </div>
        </div>
        <div className="grid">
            <div className='video-container'>
                <video className='video-neureal' controls>
                    <source src="http://jennygreyson.com/wp-content/uploads/2017/12/limitless-copy.mp4" type="video/mp4" /> Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <LearnMore />
    </div>
</div>
    )
  }
}

//Team Section Quote

//Roadmap button
//Paper Texture
//Whitepaper button
//Extra content from jen grayson site that is missing
//As seen on below this icons (icons)
//Learn more below this page
//Modal

//First Sentence
//White paper Button Silver
//Blog Post ReRoute
//"As seen" Section
//Call Uncle Andy
//Whitepaper link
//Learn more in blog


//Seperate accountability advisors from main
//Whitepaper pdf to HTML
//More Team & Advisors members
//Sale Section
 