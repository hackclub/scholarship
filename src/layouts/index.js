import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, colors } from '@hackclub/design-system'

import Header from '../components/header'

const Layout = ({ children, data }) => (
  <ThemeProvider webfonts>
    <html lang="en" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { charSet: 'UTF-8' },
        { name: 'viewport', content: "width=device-width,initial-scale=1" },
        { name: 'theme-color', content: colors.primary },
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hackclub' },
        { name: 'twitter:domain', content: data.site.siteMetadata.url },
        { name: 'twitter:title', content: data.site.siteMetadata.title },
        { name: 'twitter:description', content: data.site.siteMetadata.description },
        { name: 'twitter:image', content: data.site.siteMetadata.img },
        { property: 'og:site_name', content: data.site.siteMetadata.title },
        { property: 'og:title', content: data.site.siteMetadata.title },
        { property: 'og:description', content: data.site.siteMetadata.description },
        { property: 'og:image', content: data.site.siteMetadata.img },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: data.site.siteMetadata.url }
      ]}
    />
    {/* (max@maxwofford.com) Got feedback the Header looks broken. Just commenting out for the time being */}
    {/*<Header />*/}
    {children()}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        url
        img
      }
    }
  }
`
