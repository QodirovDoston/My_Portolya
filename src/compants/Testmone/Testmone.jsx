import React from 'react'
import './Testmone.css'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const Testmone = () => {
  return (
    <>
      <section id='test'>
        <h5 className='what'>What I Offer</h5>
        <h2>Sevices</h2>
        <div className="container services_container">
          <article className='services'>
            <div className='services_head'>
              <h3>I don't Ui/Ux disiger </h3>
            </div>
            <ul className="services_list">
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
            </ul>
          </article> 
         {/* ////////////// */}


          <article className='services'>
            <div className='services_head'>
              <h3>web Devolopment </h3>
            </div>
            <ul className="services_list">
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
            </ul>
          </article>

          {/* ////////////////// */}

          <article className='services'>
            <div className='services_head'>
              <h3>Devops </h3>
            </div>
            <ul className="services_list">
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
              <li>
                <LibraryAddCheckIcon className='services_list_icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus?</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
export default Testmone
