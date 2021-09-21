import { CKBJson } from '@antv/knowledge';

interface MdxASTNode {
  type: string
  value: string
  children: {type: string; url: string; alt: string}[]
}
interface Node {
  name: string
  childMdx: null | {
    mdxAST: {
      children: MdxASTNode[]
    }
  }
}
export interface ChartProp {
  children: string[]
  cnName: string
  enName: string
  iconName?: string
}

export interface ChartInfo {
  name: string
  image: string
  path: string
  common: string[]
  shape: string[]
  graphTypes: string[]
  function: string[]
  /**
   * 便于搜索
   * $searchMap: { 属性值: 1 }
   */
  $searchMap: Record<string, number>
}

const zhCompletedKB = CKBJson('zh-CN', true);

function mapDeEmphasis(map, arr: any[]) {
  if (Array.isArray(arr)) {
    for (const iterator of arr) {
      if (map[iterator] === undefined) {
        map[iterator] = 1
      }
    }
  }
}
export function parseProps() {
  const map: Record<string, Record<string, number>> = {
    category: {},
    purpose: {},
    shape: {},
    family: {},
  }
  for (const key in zhCompletedKB) {
    const chartInfo = zhCompletedKB[key]
    const { category, purpose, shape, family } = chartInfo
    mapDeEmphasis(map.category, category)
    mapDeEmphasis(map.purpose, purpose)
    mapDeEmphasis(map.shape, shape)
    mapDeEmphasis(map.family, family)
  }
  const propsList =  [
    {
      children: Object.keys(map.family),
      // $map: map.family,
      cnName: '常用',
      enName: 'family',
      iconName: 'icon_often',
    },
    {
      children: Object.keys(map.shape),
      // $map: map.shape,
      cnName: '形状',
      enName: 'shape',
      iconName: 'icon_shape',
    },
    {
      children: Object.keys(map.category),
      // $map: map.category,
      cnName: '图类',
      enName: 'category',
      iconName: 'icon_category',
    },
    {
      children: Object.keys(map.purpose),
      // $map: map.purpose,
      cnName: '功能',
      enName: 'purpose',
      iconName: 'icon_feature',
    },
  ]
  return {
    propsList,
    propMap: map
  }
}

export function parseChartFromMDX(nodes: Node[]) {
  const chartList: ChartInfo[] = []
  for (const node of nodes) {
    const { name, childMdx } = node
    const chartKB = zhCompletedKB[name];

    const chartInfo: ChartInfo = {} as ChartInfo
    if (chartKB) {
      chartInfo.name = chartKB.name
      chartInfo.path = name
      chartInfo.common = chartKB.family
      chartInfo.shape = chartKB.shape
      chartInfo.graphTypes = chartKB.category
      chartInfo.function = chartKB.purpose
      // 将属性转为map便于查找
      chartInfo.$searchMap = {}
      mapDeEmphasis(chartInfo.$searchMap, chartKB.family)
      mapDeEmphasis(chartInfo.$searchMap, chartKB.shape)
      mapDeEmphasis(chartInfo.$searchMap, chartKB.category)
      mapDeEmphasis(chartInfo.$searchMap, chartKB.purpose)
    }
    if (childMdx && childMdx.mdxAST && Array.isArray(childMdx.mdxAST.children)) {
      let hasDetailOverview = false
      for (const ASTNode of childMdx.mdxAST.children) {
        if (ASTNode.type === 'jsx' && ASTNode.value.includes(`<section class='chart-detail-overview'>`)) {
          hasDetailOverview = true
        }
        if (hasDetailOverview) {
          if (ASTNode.type === 'paragraph') {
            for (const child of ASTNode.children) {
              if (child.type === 'image') {
                chartInfo.image = child.url
              }
            }
          }
          if (ASTNode.type === 'jsx' && ASTNode.value.includes('</section>')) {
            hasDetailOverview = false
          }
        }
      }
    }
    if (chartKB) {
      chartList.push(chartInfo);
    }
  }
  return {
    chartList,
  }
}