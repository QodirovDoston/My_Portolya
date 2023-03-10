import React from 'react'
import './Contect.css'
import img1 from '../../asssdjd/img1.png'
import img2 from '../../asssdjd/i13.webp'



const data = [
  {
    id: 1,
    img:img1,
    title: "Mem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/weather_app_demo",
    demo: "https://vocal-gnome-e91268.netlify.app",
  },
  {
    id: 2,
    img:img2,
    title: "Morem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/zakas_telogram",
    demo: " https://stellular-narwhal-b3fe08.netlify.app",
  },
  {
    id: 3,
    img:img1,
    title: "Eorem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/pianino.Html",
    demo: "https://bright-cranachan-e049f1.netlify.app",
  },  {
    id: 4,
    img:img2,
    title: "qodirov Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/Karochi_ob_havo",
    demo: "https://precious-malabi-c99075.netlify.app",
  },  {
    id: 5,
    img:img1,
    title: "Ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/demo.figma",
    demo: "https://fantastic-cocada-776970.netlify.app",
  }
  ,  {
    id: 6,
    img:img2,
    title: "Orem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/admin-panel",
    demo: "https://willowy-panda-6084a8.netlify.app",
  },
    {
    id: 7,
    img:img1,
    title: "Polor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/admin-panel",
    demo: "https://melodic-sable-ee3e9f.netlify.app/table",
  }
  ,
    {
    id: 8,
    img:img2,
    title: "Dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/search",
    demo: "https://mellow-dango-20fbed.netlify.app",
  }
]
const Contect = () => {
  return (
    <div>
      <section id='contect'>
        <h5>My recend work</h5>
        <h2>Portfolya</h2>
        <div className="container contect_container">
        {data.map(({id,img, title,GitHub,demo})=>{
          return(
            <>
              <article key={id} className='contect_item'>
            <div className='contect_item_image'>
              <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="contect_item_cta">
              <a href={GitHub} className='btn'> Github</a>
              <a href={demo} className='btn btn-primary'> Live Demo</a>
            </div>
          </article>
            </>
          )
        })}
        </div>
      </section>
    </div>
  )
}

export default Contect
