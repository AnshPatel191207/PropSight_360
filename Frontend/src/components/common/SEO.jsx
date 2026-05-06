import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'PropSight 360';
const DEFAULT_DESCRIPTION = 'India\'s first forensic real estate intelligence platform. Expose misleading commute claims, uncover hidden neighbourhood risks, and make data-backed property decisions with 847+ localities mapped across Ahmedabad.';
const DEFAULT_KEYWORDS = 'real estate india, property audit ahmedabad, commute bias analysis, neighborhood intelligence, property verification, RERA, forensic real estate, property risk assessment, home buying india, PropSight 360';
const SITE_URL = 'https://propsight360.netlify.app';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  type = 'website',
  image,
  noindex = false,
  structuredData
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Forensic Real Estate Intelligence`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const metaKeywords = keywords || DEFAULT_KEYWORDS;
  const metaImage = image || DEFAULT_IMAGE;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_URL);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="PropSight Intelligence Pvt Ltd" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#00D4AA" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
