import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
    <footer className='footer'>
      <div className='logo'>
        <a href='https://jmpmen.netlify.app/' role='button'>James Michael Mendoza</a>
      </div>
      <ul>
        <li><a href='https://github.com/Jmpmen' role='button'><FaGithub /></a></li>
        <li><a href='https://twitter.com/Jmpmen_' role='button'><FaTwitter /></a></li>
        <li><a href='https://www.linkedin.com/in/jmpmen/' role='button'><FaLinkedin /></a></li>
      </ul>
    </footer>
  )
}

export default Footer
