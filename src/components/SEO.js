import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, keywords, title, pathname, image
}) {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            description
            twitterCreator
            siteUrl
          }
        }
        defaultImage: file(relativePath: { eq: "logo_social.png" }) {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  let siteImage;
  if (image === undefined || image  === '' || image === null) {
    siteImage = `${siteUrl}${defaultImage.childImageSharp.fixed.src}`;
  } else {
    siteImage = image;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: siteImage,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${pathname || "/"}`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : [],
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
