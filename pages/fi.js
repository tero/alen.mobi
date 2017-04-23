import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLink('/')}>In english</Link>
        <h2>
            Kuka?
        </h2>
        <p>
            Olen web-sovelluksien parissa työskentelevä ohjelmistokehityksen ammattilainen.
            Päivätyökseni kehitän videohaastattelutyökalua nimeltä RecRight.
            Päivätyön ohella teen myös satunnaisesti konsultointia eri yrityksille.
        </p>
        <p>
            Olen työskennellyt monien eri teknologioiden parissa ja tarkempi
            työhistoriani löytyy Linkedin-profiilistani.
        </p>
        <h2>
            Missä voisin autta?
        </h2>
        <p>
            Teen teknologiakartoituksia, arkkitehtuurisuunnittelua sekä monenlaista muuta teknologiakonsultointia.
        </p>
        <p>
            Useimmat projektit ovat luottamuksellisia ja tämän vuoksi voin toimittaa referenssejä pyynnöstä.
        </p>
        <h2>Ota yhteyttä</h2>
        <p>
            Jos sinulla ei ole vielä suoria yhteystietojani, ole hyvä ja ota yhtyettä oheisella lomakkeella.
        </p>
        <form method="POST" action="http://formspree.io/tero@alen.mobi">
          <label htmlFor="email" style={{display: 'block'}}>
            Sähköpostiosoitteesi
          </label>
        <input type="email" id="email" name="email" />
          <label  htmlFor="message" style={{display: 'block'}}>
            Viestisi
          </label>
        <textarea id="message" name="message"></textarea>
          <button type="submit" style={{display: 'block'}}>Lähetä</button>
        </form>
      </div>
    )
  }
}
