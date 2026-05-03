import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = 'PropSight 360';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Forensic Real Estate Intelligence`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'A forensic real estate intelligence platform that exposes misleading commute claims and missing neighbourhood data.'} />
      <meta name="keywords" content={keywords || 'real estate, india, property audit, commute bias, neighborhood intelligence'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
