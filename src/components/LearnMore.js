import React, { Component } from 'react'

export default class LearnMore extends Component {
  render() {
    return (
<div>
    <div className="content">
        <div className="flex-reverse">
            <div className="column column__two-thirds">
                <div className="padding-image">
                    <img src={require( '../images/Comp_5.gif')} alt="" className="content__image" />
                </div>
            </div>
            <div className="column column__one-third">
                <h1 className="content__title">What is Neureal?</h1>
                <h3 className='sub-title'> A limitless and infinitely scalable ability to forecast the future.</h3>
                <p className="content__paragraph">That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives
                    rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our
                    architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane
                    accurately enough to move vulnerable people out of harm’s way, predict traffic and human pattterns accurately
                    enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple,
                    Neureal’s impact is far-reaching.</p>
            </div>
        </div>


        <div className="flex">
            <div className="column column__one-third">
                <h1 className="content__title">How does it work?</h1>
                <h3 className='sub-title'> Miners set up prediction nodes.</h3>
                <p className="content__paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
                </p>

                <h3 className='sub-title'> Nodes collect massive ammounts of data.</h3>
                <p className="content__paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="column column__two-thirds">
                <img src={require( '../images/Comp_2.gif')} alt="" className="content__image" />
            </div>
        </div>


        <div className="flex-reverse">
            <div className="column column__two-thirds">
                <img src={require( '../images/Comp_4.gif')} alt="" className="content__image" />
            </div>
            <div className="column column__one-third">
                <div learn-more-flex>
                    <h3 className='sub-title'> Neureal protocal constructs the data in a hierarchical fashion allowing for accurate predictions using
                        live data streams collected by the mining nodes.</h3>
                    <p className="content__paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='learn-more-padding'>
                        <h3 className='sub-title'> Selling the data. Neureal marketplace will allow miners to sell the data they've gathered to the
                            public or to private entities allowing for a better user experience.</h3>
                        <p className="content__paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    )
  }
}
