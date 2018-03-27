import React, { Component } from 'react';

export default class BlogPost7 extends Component {
  render() {
    return (
<div>
  <div className="content">

    {/*
    <div className='flex-author'>
      <img className='author-of-blog' src={require( '../../images/team/kyler.jpg')} alt='author' />
      <div className='flex-date'>
        <div className='author-name'>Kyler Anderson</div>
        <div className='author-date-posted'>March 1</div>
      </div>
    </div> */}

    <div className='blog-post-container'>
      <div className='column__post'>
        <div className='image-blog-container'>
          <img className='img-main-blog' src="https://image.ibb.co/k2YHTS/neureal_background_final.jpg" alt="blog post" />
        </div>
      </div>
      <div className='title-blog'>Inspiring AI: The Biological Basis for a Machine Mind</div>
      <div className='sub-title-blog'>This is a neuron:</div>
      <img className='blog-image-small' src="https://image.ibb.co/cZO7S7/neuron.jpg" alt="neuron" />
      <div className='image-caption'>(https://www.evolvingsciences.com/Neuron%20.html)</div>
      <div className='caption-blog'>
        It is a specialized cell in your nervous system responsible for relaying information from one location to another. It does
        this through action potentials—small surges of electrical current that travel along the neuron.
        <br/>
        <br/> Your brain is comprised of about 86 billion neurons organized in a way that allows you to see, hear, and smell the
        world around you. It makes sense of these sensations by organizing them in a way we can interpret. Complex brains
        can use higher level processing to apply cognition for awareness, context, and decision making.
        <br/>
        <br/> These neurons form a network by connecting to one another. If you bang your knee, a single neuron might relay that
        message to another until they reach the part of your brain that interprets pain. When it comes to complex tasks like
        interpreting the world around you, connections become a little more complicated.
        <br/>
        <br/>
        <img className='blog-image-small' src="https://image.ibb.co/mUaRLS/neuron_detail.jpg" alt="neuron detail" />
        <div className='image-caption'>(https://ehumanbiofield.wikispaces.com/Neurons)</div>
        <br/>
        <br/> Neurons in your brain have multiple sites where other neurons can connect known as dendrites. The electrical signal
        is sent through the cell, down the long tail known as the axon, and transmitted into the dendrite of yet another
        cell. A single cell can receive one to thousands of inputs along its dendrites which culminate in an output that
        travels down the cell and delivered to more dendrites at the next stage of the signal.
        <br/>
        <br/> In your cortex—the folded fleshy outside always pictured in diagrams—these neurons are arranged in layers.
        <br/>
        <br/>
        <img className='blog-image-small' src="https://image.ibb.co/cRrcS7/neuron_layers.jpg" alt="neuron layers" />
        <br/>
        <br/> Adding these layers of complexity to a simple functional unit like a neuron gives you a processor that can absorb,
        organize, and interpret data on its own. The field of neuroscience is tasked with decoding this single organ to understand
        how the brain works.
        <br/>
        <br/> Neuroscientists of the world aren’t the only ones looking at this sort of neural architecture. In recent decades,
        computer science has pushed machine learning forward into new realms. But before we delve into them, let’s look at
        how you’re able to read this article.
        <br/>
        <br/> Light hits the cells at the back of your eye called retina. That is the last time your body is exposed to the raw
        data of what you are seeing. That’s because the retina initiate a chain reaction of electrochemical signals that
        travel down your optic nerve. Light is our input.
        <br/>
        <br/> At this point, the information is simply electrical impulses. They go to the back of the brain which is responsible
        for sorting out the basic details like lines, curves, and shapes. From there it goes on to higher level processing
        that identifies what the object is and what it is doing.
        <br/>
        <br/>
        <img className='blog-image-half' src="https://image.ibb.co/fYgrLS/brain_layer.jpg" alt="brain layer" />
        <img className='blog-image-half' src="https://image.ibb.co/jr4d0S/brain.jpg" alt="brain" />
        <br/>
        <br/>
        <div className='creator-blog'>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}