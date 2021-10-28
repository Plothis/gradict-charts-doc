import React from 'react';
import { ChartInfo } from '../../utils/parseMDX';

export const ChartContext = React.createContext<{
    chartList: ChartInfo[];
    currentChart: ChartInfo | null;
}>({
    chartList: [],
    currentChart: null,
});

 