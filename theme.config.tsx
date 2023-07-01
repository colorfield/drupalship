import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router"

// @todo add svg logo
const logo = (
  <>
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      Drupalship
    </span>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </>  
)

const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/colorfield/drupalship',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return {
        titleTemplate: "Drupalship | The Hitchhiker's Guide to the Drupal Planet",
      }
    }
    return {
      titleTemplate: '%s | Drupalship',
    }
  },
  //chat: {
  //  link: 'https://discord.com',
  //},
  docsRepositoryBase: 'https://github.com/colorfield/drupalship/tree/main',
  footer: {
    text: ( 
      <>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/roadmap">Roadmap</a></li>
          <li><a href="/credits">Credits</a></li>
          <li><a href="https://drupal.community/@drupalship" target="_blank" rel="me">Mastodon ↗</a></li>
          <li><a href="https://twitter.com/drupalship" target="_blank" rel="noreferrer">Twitter ↗</a></li>
        </ul>
      </>
    ), 
  },
  search: {
    // todo localize
    placeholder: 'Search',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'fr', text: 'Français' },
  ],
}

export default config
