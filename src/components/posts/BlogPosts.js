import React, { Component } from 'react'

export default class BlogPosts extends Component {
  render() {
    return (
      <div>
          <div className="content">
         
              {/* <div className='flex-author'>
              <img className='author-of-blog' src={require('../../images/team/kyler.jpg')} alt='author' />
            <div className='flex-date'>
              <div className='author-name'>Kyler Anderson</div>
              <div className='author-date-posted'>March 1</div>
            </div>
            </div> */}
  
          
        <div className='blog-post-container'>
        <div className='column__post'>
          <div className='image-blog-container'>
          <img className='img-main-blog' src={require('../../images/imageTest.jpeg')} alt="blog post"/>
          </div>
        </div>


        <div className='column__post'>
          <div className='blog-detail-container-secondary'>
            <div className='title-blog'>Sit amet consectetur adipisicing elit?</div>
            <div className='caption-blog'> 
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Aliquam eligendi aperiam, autem, sunt dolore sequi qui veniam et non molestiae illo maiores 
            facere minus velit beatae porro corporis doloribus obcaecati voluptatum? Provident sequi nemo at 
            ratione voluptatum veritatis ipsum eaque molestiae animi odit iusto aut labore nulla distinctio 
            rerum nostrum recusandae eum laboriosam quo amet suscipit, odio error? Porro voluptatibus commodi
             architecto aliquid cumque reprehenderit alias assumenda 
             <br/>

            <div className='paragraph-title'>Sit amet consectetur adipisicing elit?</div>
             vel accusantium minus numquam molestiae 
             ab, veritatis in sit libero. Voluptas accusamus saepe, quis molestiae optio reiciendis sed at 
             exercitationem repellat fugit ab incidunt libero assumenda cumque quae animi veritatis similique
              voluptate repellendus temporibus distinctio omnis sint dolorem. Iusto hic vel minus maiores 
              reiciendis totam a incidunt dolorum ipsam? Blanditiis consequatur ex dolor rem eveniet aperiam 
              magnam nostrum, voluptas rerum. Impedit inventore aliquam numquam culpa ad maxime quam quae cum 
              eleniti magnam, quaerat nisi. Sunt inventore reprehenderit, repellendus error aut assumenda 
              tempora similique facere ipsam adipisci sed cumque, cupiditate provident nulla. Sapiente 
              asperiores eveniet, deserunt eaque voluptates incidunt ullam eius magnam laudantium laboriosam 
              dolores, quos commodi ipsam doloremque? Repellendus mollitia voluptatem similique maxime, 
              inventore distinctio. Eaque odio rem consequuntur pariatur repellendus magnam illo esse dolores, 
              laboriosam, non dicta. Dolore reprehenderit suscipit repellat doloribus delectus, laboriosam 
              dolorem sapiente quod molestiae aut quo nulla possimus atque. Omnis, ex eius. Dolor officiis 
              minima sed, quaerat mollitia veritatis ducimus fugiat est a placeat nobis cum! Minus suscipit, 
              recusandae, consectetur quo architecto laborum tenetur minima excepturi commodi quis sint impedit 
              at esse autem eligendi sunt nulla id saepe quidem repellat quia! Quaerat, maxime illo! Laudantium 
              ex earum voluptas. Et minima officia neque, esse facere quisquam obcaecati accusamus inventore a
              tque saepe enim, porro aspernatur laudantium tempore rem quia recusandae alias qui quo tenetur, 
              dolor sed ipsum! Obcaecati numquam reiciendis cum doloribus placeat fugit expedita maxime quia, 
              impedit corporis repellat.
 </div>
            <div className='creator-blog'>
            </div>
          </div>
        </div>
        </div>
          </div>
      </div>
    )
  }
}
