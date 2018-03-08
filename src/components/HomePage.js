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
                <br/>
                That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives
                    rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our
                    architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane
                    accurately enough to move vulnerable people out of harm’s way, predict traffic and human patterns accurately
                    enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple,
                    Neureal’s impact is far-reaching.</p>
                <div className='home-button-flex'>
                    <a href='https://docs.google.com/document/d/1kOJx7clG2V4TevhgwndRDievXpVaAciPzjmqGxI0CtA/edit#'>
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
                <img src="https://image.ibb.co/eTnEcn/Comp_1.gif" alt="" className="content__image" />
            </div>
        </div>

        <div className="flex-columns">

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <h1 className="content__title">Accuracy</h1>
                        <p className="content__paragraph">Prediction is worthless without accuracy. Our ability to harness compute via blockchain technology,
                            coupled with the ability to create predictors out of novice users creates unsurpassed accuracy.
                        </p>
                    </div>
                </div>
            </div>

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <h1 className="content__title">Proven</h1>
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
                            <h1 className="content__title">Incentivized</h1>
                            <p className="content__paragraph">Adding the ability to pay and get paid within an open-source governance incentivizes and rewards
                                all participants, no matter what role they play inside the organism.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='column'>
            <h1 className="content__quote">"Top 20 Most Promising Artificial Intelligence Solution Providers
                <br/> 2017–CIOReview"</h1>
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
 