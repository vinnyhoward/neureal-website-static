import React, { Component } from 'react';
import Profile from './TeamProfile';

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
    return (
      <div>
        <div className="content-team">
    <div className="column column__title">
  <h2 className='team-title'>
    The Neureal Team
  </h2>
  </div>
      <div className="column column__full">
        <div className='flex-team'>


          <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 



           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 




           <div className='team-box'>
          <div className='team-box-container'>
          <div className='team-image-container'>
          <img className='team-image' src={require('../images/team/jen.jpg')} alt="team"/>
          </div>
          <div className='name-title-container'>
          <div className='team-name'>Jenny Grayson</div>
          <div className='team-role'>CEO</div>
          </div>

          <div className='biography'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!</div>

          <div className='team-icon-container'>
          <img className='team-icon' src="" alt="social"/>
          </div>
          </div>
          </div>
 
        </div>
      </div>
    </div>
  </div>
    )
  }
}
