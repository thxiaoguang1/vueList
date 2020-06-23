import request from '../service/request';

export function product () {
  const url = '/product2';
  return request({
    url,
    method: 'GET'
  })
}
