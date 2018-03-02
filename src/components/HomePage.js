import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
          <div className="content">
            <div className="flex">
              <div className="column column__one-third">
                        <h1 className="content__title">World's first AI prediction blockchain</h1>
                        <p className="content__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo. Dolores magnam animi facere error, eos corporis eum incidunt magni vero commodi, laborum non! Inventore eum omnis veniam consectetur accusamus!</p>
                        <div className='home-button-flex'>
                        <Link to='/learn' ><a href='./learnMore.html'><div className="learn-more-button"><div className='learn-more'>LEARN MORE</div></div></a></Link>
                        <Link to='/roadmap' ><a href='./roadmap.html'><div className="roadmap-button"><div className='road-map'>ROADMAP</div></div></a></Link>
                        </div>
                    </div>
                    <div className="column column__two-thirds">
                        <img src={require('../images/Comp_1.gif')} alt="" className="content__image" />
                    </div>
                </div>
                <div className="grid">
                    <p> Need a more detailed explanation?</p>
                    <div className='video-container'>
                        <video className='video-neureal' controls>
                                <source src="http://jennygreyson.com/wp-content/uploads/2017/12/limitless-copy.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                      </video>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
