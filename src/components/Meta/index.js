// @flow

import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({
  favicon,
  links
}: any) => {
  return (
    <Helmet>
      {links}
      <meta key="charset" charSet="utf-8" />
      <meta
        key="content-type"
        ttpEquiv="Content-Type"
        content="text/html; charset=utf-8"
      />
      <link
        key="icon32x32"
        rel="icon"
        type="image/png"
        href={favicon['32x32']}
        sizes="32x32"
      />
    </Helmet>
  )
}

export default Meta
