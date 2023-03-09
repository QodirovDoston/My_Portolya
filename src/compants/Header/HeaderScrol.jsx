import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const HeaderScrol = () => {
  return (
    <>
    <div className='header_socials'>
      <a href="https://uz.linkedin.com/" target='_blank' ><LinkedInIcon   sx={{
      color:"white",
        fontSize: "40px",
          "&:hover": { color: "blue" }}}/>  </a>
      <a href="https://github.com/QodirovDoston" target='_blank'><GitHubIcon sx={{
      color:"white",
        fontSize: "40px",
          "&:hover": { color: "blue" }}}/></a>
      <a href="https://www.instagram.com/qodirovdoston806/" target='_blank'><InstagramIcon sx={{
      color:"white",
        fontSize: "40px",
          "&:hover": { color: "blue" }}}/></a>
      <a href="https://uz.linkedin.com/" target='_blank'></a>

    </div>
    </>
  )
}
export default HeaderScrol
