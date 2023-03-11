import React from 'react'
import './About.css'
import about_me from "../../asssdjd/hacker.jpg"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupIcon from '@mui/icons-material/Group';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const About = () => {
  return (
    <>
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_img">
              <img src={about_me} alt="" />
            </div>
          </div>
          <div className="about_contect">
            <div className="about_cards">
              <article className="about_card">
                <MilitaryTechIcon className="about_icon" />
                <h1>exprense</h1>
                <small>1+ Years Working</small>
              </article>
              <article className="about_card">
                <GroupIcon className="about_icon" />
                <h1>follower</h1>
                <small>594+  worldwide</small>
              </article>
              <article className="about_card">
                <FolderCopyIcon className="about_icon" />
                <h1>Project</h1>
                <small>90+ Completed</small>
              </article>
            </div>
            <div className="both">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt perferendis laboriosam? Laborum corporis iusto neque nemo, veritatis facilis impedit.</p>
              <a href="#contect" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
