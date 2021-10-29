import request, { checkResult } from '../utils/request';
import Axios from 'axios';
import { Object2FormData } from '../utils';

export interface FeedbackParams {
  description: string;
  email: string;
  nickname: string;
  type: string;
  graphId?: string;
  images?: {filename: string;path: string}[]
}

export interface Committer {
  name: string;
  email: string;
  date: string;
}
export interface Commit {
  author: Committer;
  committer: Committer;
  message: string;
  url: string;
  comment_count: number;
}

export function feedback(data: FeedbackParams) {
  return checkResult(request({
    method: 'POST',
    url: '/common/feedback',
    data: data,
  }));
}
export function uploadImg(data: any) {
  return checkResult(request({
    method: "POST",
    url: `common/uploadImg`,
    data: Object2FormData(data),
  }));
}

export function getChartFileCommit(path: string) {
  // /charts/pie_chart.mdx
  return Axios.get<{commit: Commit}[]>(`https://api.github.com/repos/Plothis/gradict-charts-doc/commits?sha=master&path=${path}`).then((res) => {
    return res.data
  }).catch(() => [] as {commit: Commit}[])
}