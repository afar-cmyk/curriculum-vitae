import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = ({ description, lang, meta, title }) => {
  const { site, imagen } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
          }
        }
        imagen: file(relativePath: { eq: "/twitter.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = imagen
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: keywords
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:image`,
          content: image
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO