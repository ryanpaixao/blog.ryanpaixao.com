import React from 'react';

// Images
const linkedinLogo = require('../../assets/images/3rd_party_logos/LinkedIn-Blue-43px-R.png');
const githubLogo = require('../../assets/images/3rd_party_logos/GitHub-Mark-Light-32px.png');
const twitterLogo = require('../../assets/images/3rd_party_logos/Twitter_Blue-36px.png');
const stackoverflowLogo = require('../../assets/images/3rd_party_logos/Stackoverflow-32px.png');

const Footer = (props) => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li>
            <a href='https://github.com/ryanpaixao' target='_blank' rel='noopener noreferrer'>
              <img
                src={githubLogo}
                alt='Github logo'
              />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/thecounthimself' target='_blank' rel='noopener noreferrer'>
              <img
                src={twitterLogo} 
                alt='Twitter logo'
              />
            </a>
          </li>  
          <li>
            <a href='https://stackoverflow.com/users/9549703/ryan-paixao' target='_blank' rel='noopener noreferrer'>
              <img
                src={stackoverflowLogo} 
                alt='Stackoverflow logo'
              />
            </a>
          </li> 
          <li>
            <a href='https://www.linkedin.com/in/ryanpaixao/' target='_blank' rel='noopener noreferrer'>
              <img
                src={linkedinLogo}
                alt='LinkedIn logo'
              />
            </a>
          </li>        
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
