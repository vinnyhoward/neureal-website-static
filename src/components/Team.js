import React, { Component } from 'react';
import Profile from './TeamProfile';
import TeamModal from './TeamModal';
import Modal from 'react-modal';


export default class Team extends Component {

  state={ 
    openJen: false,
    openWil: false,
    openKyler: false,
    openJames: false,
    openBrianNel: false,
    openNick: false,
    openBrianBag: false,
    openJordan: false,
   }

  clickOpenJen = () => {
    this.setState({
      openJen: !this.state.openJen
    })
  }

  clickOpenWil = () => {
    this.setState({
      openWil: !this.state.openWil
    })
  }

  clickOpenKyler = () => {
    this.setState({
      openKyler: !this.state.openKyler
    })
  }

  clickOpenJames = () => {
    this.setState({
      openJames: !this.state.openJames
    })
  }

  clickOpenBrianNel = () => {
    this.setState({
      openBrianNel: !this.state.openBrianNel
    })
  }

  clickOpenNick = () => {
    this.setState({
      openNick: !this.state.openNick
    })
  }

  clickOpenBrianBag = () => {
    this.setState({
      openBrianBag: !this.state.openBrianBag
    })
  }

  clickOpenJordan = () => {
    this.setState({
      openJordan: !this.state.openJordan
    })
  }



  render() {
    const jenImage = require('../images/team/jen.jpg')
    return (
      <div>

        <TeamModal 
        onClose={this.clickOpenJen}
        clickOpen={ this.state.openJen }
        nameModal={'Jenny Grayson'}
        roleModal={'CEO'}
        biographyModal={'20+ years executive-level. Multi-million dollar leadership. IP Specialist.'}
        imageModal={jenImage}
        />

<div className="content-team">
  <div className="column column__title">
    <h2 className='team-title'>
      Meet the Core Team & Advisors
    </h2>
  </div>
  <div className="column column__full">
    <div className='flex-team'>


      <div className='team-box'>
        <div className='team-box-container' type="button" onClick={ this.clickOpenJen } value="Show Modal">
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/jen.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Jen Grayson</div>
            <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>
            20+ years executive-level. Multi-million dollar leadership. IP Specialist.</div>

        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jengreyson/"></a>
        </div>

      </div>


      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/wil.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Wil Bown</div>
            <div className='team-role'>Founder - Chief Architect</div>
          </div>

          <div className='biography'>25+ years software engineer. Million Dollar Texas Bitcoin Conference hackathon winner. Coding contributor to main
            fork Bitcoin. Bitcoin miner since 2011. Experience developing multi-million dollar software.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/wil-bown-b68bb718/"></a>
        </div>

      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/kyler.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Kyler Anderson</div>
            <div className='team-role'>Community Manager</div>
          </div>

          <div className='biography'>For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession.
            He has studied and maintained a working knowledge of the field of applied behavior analysis psychology.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/kyleranderson/"></a>
        </div>

      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/james.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>James Alton</div>
            <div className='team-role'>Developer | Dev Ops, Ethereum</div>
          </div>

          <div className='biography'>17+ years software development. Wrote the first completed Etherem contract. Bitcoin miner since 2011. Federal Government
            and Banking software solutions.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jamesalton"></a>
        </div>

      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/brian.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Brian Nelson</div>
            <div className='team-role'>Relationships, Regulation</div>
          </div>

          <div className='biography'>Token sale consultant. Bitcoin and Blockchain Expert. International speaker.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/briannelson36/"></a>
        </div>
      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/nick.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Nick Baguley</div>
            <div className='team-role'>Data Science, Contacts, Strategy</div>
          </div>

          <div className='biography'>Creator of a near-real time serverless architecture for the finance industry.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/nickbaguley/"></a>
        </div>

      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/brian_sewell.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Brian Sewell</div>
            <div className='team-role'>Education</div>
          </div>

          <div className='biography'>Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education.
            Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing
            industries.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/nickbaguley/"></a>
        </div>

      </div>





      <div className='team-box'>
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/jordan.jpg')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Jordan Miller</div>
            <div className='team-role'>Founder - Architect</div>
          </div>

          <div className='biography'>Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning,
            economics, phi- losophy and information theory.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jordan-miller-636724b/"></a>
        </div>

      </div>

    </div>
  </div>
</div>
</div>
    )
  }
}
