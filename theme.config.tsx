import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";

const logo = (
  <span>
    <span>Drupalship</span>
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
  </span>
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
  //docsRepositoryBase: 'https://github.com/colorfield/drupalship',
  footer: {
    text: 'Drupalship',
  },
  // Disable i18n support for now
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'fr', text: 'Français' },
  // ],
}

export default config
