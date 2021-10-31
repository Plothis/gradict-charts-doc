import { CKBJson, addChart, ChartKnowledge, Language, TransKnowledgeProps } from '@antv/knowledge';

const parallel_coordinates: ChartKnowledge = {
  id: 'parallel_coordinates',
  name: 'Parallel Coordinates',
  alias: [],
  family: ['LineCharts'],
  def: '',
  purpose: ['Distribution', 'Relation'],
  coord: [],
  category: ['Statistic'],
  shape: ['Lines'],
  dataPres: [{ minQty: 1, maxQty: 1, fieldConditions: ['Interval'] }],
  channel: [],
  recRate: "" as any,
};

const parallel_coordinates_trans: TransKnowledgeProps = {
  name: '平行坐标系',
  alias: [],
  def: '平行坐标系，是一种含有多个垂直平行坐标轴的统计图表。',
};

addChart(
  parallel_coordinates,
  { 'zh-CN': parallel_coordinates_trans} as Record<Language, TransKnowledgeProps>
);

const sunburst_chart: ChartKnowledge = {
  id: 'sunburst_chart',
  name: 'Sunburst Chart',
  alias: [],
  family: ['LineCharts'],
  def: '',
  purpose: ['Composition'],
  coord: [],
  category: ['Statistic'],
  shape: ['Round'],
  dataPres: [{ minQty: 1, maxQty: 1, fieldConditions: ['Interval'] }],
  channel: [],
  recRate: "" as any,
};

const sunburst_chart_trans: TransKnowledgeProps = {
  name: '旭日图',
  alias: [],
  def: '旭日图是一种表现层级数据的图表。',
};

addChart(
  sunburst_chart,
  { 'zh-CN': sunburst_chart_trans } as Record<Language, TransKnowledgeProps>
);

export { CKBJson }