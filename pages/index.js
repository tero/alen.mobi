import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLink('/fi/')} style={{float: 'right'}}>Suomeksi</Link>
        <h2>
          Hi people
        </h2>
        <p>
            I am a web development professional working at the moment for RecRight,
            but I also do some gigs as a freelancer.
        </p>
        <p>
            I have a long history of developing web applications with various
            technologies. My full bio can be found on Linkedin.
        </p>
        <h2>
            What kind of projects could I help?
        </h2>
        <p>
            If you need technology due diligence, cloud architecture, or any other web related consulting, I can give a helping hand.
        </p>
        <p>
            References are available per request due to the confidentiality of projects.
        </p>
        <h2>Contact</h2>
        <p>
            If you don't yet have my contact details, please use the following form to send a message to me.
        </p>
        <form method="POST" action="http://formspree.io/tero@alen.mobi">
          <label htmlFor="email" style={{display: 'block'}}>
            Your email
          </label>
          <input id="email" type="email" name="email" style={{width: '100%'}} />
          <label htmlFor="email" style={{display: 'block'}}>
            Your message
          </label>
          <textarea id="message" name="message" rows="5" style={{width: '100%'}}></textarea>
          <button type="submit" style={{display: 'block', float: 'right'}}>Send</button>
        </form>
      </div>
    )
  }
}
