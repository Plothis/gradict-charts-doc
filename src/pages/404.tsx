import React from 'react';

const NotFoundPage = () => {
  // FIXME 暂时将 next 404 页面 html copy 过来
  return (
    <div dangerouslySetInnerHTML={{ __html: `<div style="color:#000;background:#fff;font-family:-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center"><div><style>body {margin: 0 }</style><h1 style="display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top">404</h1><div style="display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle"><h2 style="font-size:14px;font-weight:normal;line-height:inherit;margin:0;padding:0">This page could not be found<!-- -->.</h2></div></div></div>` }}></div>
  )
}

// NotFoundPage.noLayout = true;

export default NotFoundPage;