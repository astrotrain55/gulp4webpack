import axios from 'axios';

const isData = data => data && _.size(data);
const resError = e => Promise.reject(e);

const instance = axios.create({
  baseURL: '../ajax/',
  method: 'post',
  transformRequest(data) {
    if (isData(data)) {
      return _.reduce(data, (total, item, key) => {
        total.append(key, item);
        return total;
      }, new FormData());
    }
  },
});

instance.interceptors.request.use((config) => {
  if (config.method === 'get' && isData(config.data)) {
    config.params = config.data;
  }

  return config;
}, resError);

instance.interceptors.response.use(({ data }) => data, resError);

export default (data, fn) => {
  instance(data).then((res) => {
    fn(res);
  });
};
