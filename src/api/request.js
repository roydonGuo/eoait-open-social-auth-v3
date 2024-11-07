// 封装请求方法
import instance from "@/api/interceptor";

class AxiosService {
    constructor() {
        if (AxiosService.instance) {
            return AxiosService.instance;
        }
        AxiosService.instance = this;
    }

    // GET 请求
    get(url, params = null) {
        return instance.request({
            method: 'get',
            url,
            params,
        });
    }

    // POST 请求
    post(url, data = null, params = null, responseType) {
        return instance.request({
            method: 'post',
            url,
            data,
            params,
            responseType
        });
    }

    // PUT 请求
    put(url, data = null, params = null) {
        return instance.request({
            method: 'put',
            url,
            data,
            params,
        });
    }

    // DELETE 请求
    delete(url, params = null) {
        return instance.request({
            method: 'delete',
            url,
            params,
        });
    }
}

// 创建 AxiosService 实例
const axiosService = new AxiosService();

// 导出实例化后的 AxiosService 对象
export default axiosService;
