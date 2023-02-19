import { CKBJson, addChart, ChartKnowledge, Language, TransKnowledgeProps } from '@antv/knowledge';
import { chartKnowledges } from './props';

export { CKBJson }

for (let i = 0; i < chartKnowledges.length; i++) {
  const { chartKnowledge, trans } = chartKnowledges[i];
  addChart(
    chartKnowledge as ChartKnowledge,
    trans as any
  );
}

