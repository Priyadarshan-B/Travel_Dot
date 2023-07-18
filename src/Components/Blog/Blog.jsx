import React from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'


import img1 from '../../Assests/HI/a1.jpg'
import img2 from '../../Assests/HI/a2.jpg'
import img3 from '../../Assests/HI/a3.jpg'
import img4 from '../../Assests/HI/a4.avif'




const Posts = [
  {
    id:1,
    postImage: img1,
    title: 'Beautiful Morocco, let us travel',
    link: "https://www.worldpackers.com/articles/reasons-to-travel-to-morocco",
    desc: 'The kingdom of Morocco is a Muslim country in western North Africa,with coastines on the Atlantic Ocean and Mediterranean Sea.'
  },

  {
    id:2,
    postImage: img2,
    title: 'Romantic moments under Eiffel Tower',
    link: "https://www.eiffeltowertour.com/blog/why-the-eiffel-tower-is-famous-for-love-according-to-a-local/",
    desc: "with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world's earliest and greatest civilizations"
  },

  {
    id:3,
    postImage: img3,
    title: 'Let us have an adventure outside Tunisia.',
    link: "https://wildyness.com/news/best-outdoors-activities-tunisia",
    desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region'
  },

  {
    id:4,
    postImage: img4,
    title: 'Best Country in East Africa',
    link: "https://ujuzitravel.com/east-africa/",
    desc: 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of natural unity using the motto'
  }
]


const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>

          <p>
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage, title, desc, link})=>{
              return(
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href={link} target='_blank' className='flex'>
                    Read More
                    <BsArrowRightShort className="icon"/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog