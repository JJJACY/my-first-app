import axios from "axios";
import { Plugins } from '@capacitor/core';
// import Cookie from "js-cookie";
const { Toast }  =  Plugins
const axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.timeout = 20000;

//拦截器
axiosInstance.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    // const TOKEN = Cookie.get("commen_token");
    // if (TOKEN) {
    //   newConfig.headers.Authorization = `${TOKEN}`;
    // }
    return newConfig;
  },
  error => Promise.reject(error)
);

const handleErrorRequest = (error: any) => {
  const { response } = error;
  const status = response ? response.status : 408;
  if (response) {
    const { data } = response;
    const { errors } = data;
    const message = data.message || "请求发送失败~";
    if (status === 401) {
      // Cookie.remove("commen_token", {
      //   domain: process.env.VUE_APP_DOMAIN
      // });
      Toast.show(message);
    } else if (status === 403) {
      Toast.show({text:"禁止访问"});
    } else if (status === 419) {
      // Cookie.remove("zhifou_token", {
      //   domain: process.env.VUE_APP_DOMAIN
      // });
    } else if (status === 422 || status === 423 || status === 429) {
      Toast.show(errors);
    } else {
      Toast.show(message);
    }
  } else {
    Toast.show({text:"网络错误"});
  }
};

axiosInstance.interceptors.response.use(
  res => {
    switch (true) {
      case res.status === 200:
        if (res.data.success === false) {
          Toast.show(res.data.message);
          return Promise.reject(res.data);
        }
        return res.data.data ? res.data.data : res.data; //检查是否有嵌套的情况
      case !!res.status:
        Toast.show(res.data.message);
        return Promise.reject(res.data);
      default:
        return res.data;
    }
  },
  error => {
    handleErrorRequest(error);
    return Promise.reject(error);
  }
);

export default {
  post(url = "", data = {}, config = {}) {
    return axiosInstance.post(url, data, config);
  },
  put(url = "", data = {}, config = {}) {
    return axiosInstance.put(url, data, config);
  },
  patch(url = "", data = {}, config = {}) {
    return axiosInstance.patch(url, data, config);
  },
  get(url = "", params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axiosInstance.get(url, OPTIONS);
  },
  delete(url = "", params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axiosInstance.delete(url, OPTIONS);
  }
};
