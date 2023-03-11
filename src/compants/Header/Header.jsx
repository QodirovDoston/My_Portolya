import React from 'react'
import CTA from './CTA'
import './Header.css'
import me from '../../asssdjd/photo_2023-03-04_16-56-29.jpg'
import HeaderScrol from '../Header/HeaderScrol'
const Header = () => {
  return (
    <>
      <section id='home'>
        <div>
          <header>
            <div className="container header_container">
              <h5>Hello i'm</h5>
              <h1>Qodirov Doston</h1>
              <h5 className='text-light'>Devoloper && Devops</h5>
              <CTA />
              <HeaderScrol />
              <a href="#contect" className='scroll_down'> scroll</a>
              <div className="me">
                <img className='surat' src={me} alt="" />
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  )
}

export default Header
