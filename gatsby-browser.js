// require global css
import './src/style/global.less';
import './static/iconfont.css';
import 'antd/lib/popover/style/index.css'

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// 设计案例
import DesignCase from './src/components/DesignCase';
// 制作教程
import { ProductionTutorials } from './src/components/ProductionTutorials';
// 参考文献
import { Reference } from './src/components/Reference';
// 贡献者
import { Contributors } from './src/components/Contributors';
// 相似图表
import { SimilarCharts } from './src/components/SimilarCharts';

const PlaceHolder = ({ children }) => {
  return <em style={{ opacity: 0.65 }}>{children}</em>;
}

// wrap App root components
// provider must display here
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{
    PlaceHolder,
    DesignCaseContainer: DesignCase.Container,
    DesignCaseItem: DesignCase.Item,
    ProductionTutorials,
    Reference,
    Contributors,
    SimilarCharts,
  }}>{element}</MDXProvider>
)
