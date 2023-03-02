// require global css
import './src/style/global.less';
import './static/iconfont.css';
import 'antd/lib/popover/style/index.css';
import 'antd/lib/upload/style/index.css';
import 'antd/lib/modal/style/index.css';
import 'antd/lib/icon/style/index.css';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Loading from "./src/components/Loading"
// 设计案例
import DesignCase from './src/components/graphDetail/DesignCase';
// 制作教程
import { ProductionTutorials } from './src/components/graphDetail/ProductionTutorials';
// 参考文献
import { Reference } from './src/components/graphDetail/Reference';
// 贡献者
import { Contributors } from './src/components/graphDetail/Contributors';
// 相似图表
import { SimilarCharts } from './src/components/graphDetail/SimilarCharts';
import { ChartProps } from './src/components/graphDetail/ChartProps';

const PlaceHolder = ({ children }) => {
  return <em style={{ opacity: 0.65 }}>{children}</em>;
}

// wrap App root components
// provider must display here
export const wrapPageElement = ({ element}) => {

  return (
    <MDXProvider  components={{
      PlaceHolder,
      DesignCaseContainer: DesignCase.Container,
      DesignCaseItem: DesignCase.Item,
      ProductionTutorials,
      Reference,
      Contributors,
      ChartProps,
      SimilarCharts,
    }}>{element}</MDXProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <React.Suspense fallback={<Loading />}>
      {element}
    </React.Suspense>
  )
}