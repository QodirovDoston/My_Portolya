import React from 'react'
import './Exproment.css'
import VerifiedIcon from '@mui/icons-material/Verified';


const Exproment = () => {
  return (
    <div>
      <section id='exproment'>
        <h5>what skils I Have</h5>
        <h5 style={{marginBottom:'40px'}}>My expration</h5>
        <div className="container expreanse_container">
          <div className="expreanse_furontend">
            <h3>frontend devol oper</h3>
            <div className="expreanse_content">
              <article className='expreanse_detalse'>
                <VerifiedIcon  className='expreanse_detalse_icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text_light'>Eprerienced</small>
                </div>
              </article>
              <article className='expreanse_detalse'>
                <VerifiedIcon  className='expreanse_detalse_icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text_light'>Intermedit</small>
                </div>
              </article>
              <article className='expreanse_detalse'>
                <VerifiedIcon  className='expreanse_detalse_icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text_light'>Eprerienced</small>
                </div>
              </article>
              <article className='expreanse_detalse'>
                <VerifiedIcon  className='expreanse_detalse_icon'/>
                <div>
                  <h4>tailwind</h4>
                  <small className='text_light'>Eprerienced</small>
                </div>
              </article>
              <article className='expreanse_detalse'>
                <VerifiedIcon  className='expreanse_detalse_icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text_light'>Eprerienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="expreanse_backend">
          <h3>Backend devol oper</h3>
          <div className="expreanse_content">
            <article className='expreanse_detalse'>
              <VerifiedIcon className='expreanse_detalse_icon' />
              <div>
              <h4>HTML</h4>
              <small className='text_light'>Eprerienced</small>
              </div>
            </article>
            <article className='expreanse_detalse'>
              <VerifiedIcon  className='expreanse_detalse_icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text_light'>Intermedit</small>
              </div>
            </article>
            <article className='expreanse_detalse'>
              <VerifiedIcon  className='expreanse_detalse_icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text_light'>Eprerienced</small>
              </div>
            </article>
            <article className='expreanse_detalse'>
              <VerifiedIcon  className='expreanse_detalse_icon'/>
<div>
              <h4>tailwind</h4>
              <small className='text_light'>Eprerienced</small>
</div>
            </article>
            <article className='expreanse_detalse'>
              <VerifiedIcon  className='expreanse_detalse_icon'/>
<div>
              <h4>node</h4>
              <small className='text_light'>Eprerienced</small>
</div>
            </article>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exproment
