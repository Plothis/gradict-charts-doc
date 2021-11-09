import { CKBJson, addChart, ChartKnowledge, Language, TransKnowledgeProps } from '@antv/knowledge';

export { CKBJson }


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


// TODO 待完善
const hexagonal_binning: ChartKnowledge = {
  id: 'hexagonal_binning',
  name: 'Hexagonal Binning',
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

const hexagonal_binning_trans: TransKnowledgeProps = {
  name: '六边形分箱图',
  alias: [],
  def: '六边形图，是一种由六边形为主要元素的统计图表',
};

addChart(
  hexagonal_binning,
  { 'zh-CN': hexagonal_binning_trans } as Record<Language, TransKnowledgeProps>
);

// TODO 待完善
const nightingale_rose_chart: ChartKnowledge = {
  id: 'nightingale_rose_chart',
  name: 'Nightingale Rose Chart',
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

const nightingale_rose_chart_trans: TransKnowledgeProps = {
  name: '南丁格尔玫瑰图',
  alias: [],
  def: '南丁格尔玫瑰图又名鸡冠花图、极坐标区域图',
};

addChart(
  nightingale_rose_chart,
  { 'zh-CN': nightingale_rose_chart_trans } as Record<Language, TransKnowledgeProps>
);
