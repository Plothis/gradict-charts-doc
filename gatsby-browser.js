// require global css
import './src/style/global.less';
import './static/iconfont.css';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Item = ({ children }) => {
  return <section style={{ color: 'red' }}>{children}</section>;
}

// wrap App root components
// provider must display here
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{ Item }}>{element}</MDXProvider>
)
