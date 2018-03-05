import React, { Component } from 'react';

export default class RoadMap extends Component {
  render() {
    return (
<div>
  <div class="content">
    <div class="grid">
      <img src={require( '../images/roadmap.png')} alt="roadmap" class='roadmap-img' />
    </div>
  </div>
</div>
    )
  }
}
