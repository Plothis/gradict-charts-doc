import request, { checkResult } from '../utils/request';

export interface FeedbackParams {
  description: string;
  email: string;
  nickname: string;
  type: string;
  graphId?: string;
  images?: {filename: string;path: string}[]
}
export function feedback(data: FeedbackParams) {
  return checkResult(request({
    method: 'POST',
    url: '/common/feedback',
    data: data,
  }));
}
// export function uploadImg(data) {
//   return request({
//     url: '/common/uploadImg',
//     data: data,
//   });
// }
