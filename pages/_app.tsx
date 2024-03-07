import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'

function DrupalshipApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='drupalship.org' customDomain='https://plausible.colorfield.dev'>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default DrupalshipApp
