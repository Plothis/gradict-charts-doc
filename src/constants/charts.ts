import { CKBJson, addChart, ChartKnowledge, Language, TransKnowledgeProps } from '@antv/knowledge';

const parallel_coordinates: Partial<ChartKnowledge> = {
  id: 'parallel_coordinates',
  name: 'Parallel Coordinates',
  alias: [],
  family: ['LineCharts'],
  def: '',
  purpose: ['Comparison'],
  coord: [],
  category: ['Diagram'],
  shape: ['Lines'],
  dataPres: [{ minQty: 1, maxQty: 1, fieldConditions: ['Interval'] }],
};

const parallel_coordinates_trans = {
  name: '平行坐标系',
  alias: [],
  purpose: ['比较'],
  shape: ['Lines'],
  def: '平行坐标系，是一种含有多个垂直平行坐标轴的统计图表。',
};

addChart(
  parallel_coordinates as ChartKnowledge,
  { 'zh-CN': parallel_coordinates_trans } as Record<Language, TransKnowledgeProps>
);