// 网络请求
import axios from 'axios'
import { message } from 'antd';

// axios 默认配置
axios.defaults.baseURL = 'http://localhost:12306/';
axios.defaults.timeout = 30000;

// request 拦截器
axios.interceptors.request.use( 
    config => {
        console.log('config', config);
        config.headers = {
            'authorization': 'token',
            "Content-Type": "application/json", 
        }
        config.data = JSON.stringify(config.data)
        return config
    },
    error => {
        return Promise.reject(error)
    }   
)

// respone 拦截器
axios.interceptors.response.use(
    response => {
        console.log('response', response);
        return response.data
    },
    error => {
        message.info('This is a xhr error');
        return Promise.reject(error)
    }
)


/**
 * @param {url请求} url 
 * @param {params 请求参数} params 
 */
export function axiosGet(url, params = {}) {
    return new Promise( (resolve, reject) => {
        axios.get(url, {
            params: params,
        })
        .then( res => {
            resolve( res )
        })
        .catch( rej => {
            reject( rej )
        })
    })
}


/**
 * 
 * @param {请求地址} url 
 * @param {数据} data 
 */
export function axiosPost(url, data) {
    return new Promise( (resolve, reject) => {
        axios.post(url, data)
        .then( 
            res => {
                resolve( res.data )
            },
            error => {
                reject( error )
            }
        )
    })
}



/**
 * 
 * @param {错误信息}} err 
 * 1**：请求收到，继续处理
 * 2**：操作成功收到，分析、接受
 * 3**：完成此请求必须进一步处理
 * 4**：请求包含一个错误语法或不能完成
 * 5**：服务器执行一个完全有效请求失败
 */
function masg(err) {
    if(err && err.response){
        switch (err.response.status) {
            case 400:
                message.error('错误请求，如语法错误');
                break;
            case 401:
                message.error('请求未授权，请登录');
                break;
            case 403:
                message.error('拒绝访问，请求不允许');
                break;
            case 404:
                message.error('请求地址出错，没有发现文件、查询或URL');
                break;
            case 408:
                message.error('请求超时');
                break;
            case 500:
                message.error('服务器内部错误');
                break;
            case 501:
                message.error('服务未实现，服务器不支持请求的函数');
                break;
            case 502:
                message.error('网关错误，服务器暂时不可用');
                break;
            case 503:
                message.error('服务不可用，服务器过载');
                break;
            case 504:
                message.error('网关超时');
                break;
            case 505:
                message.error('HTTP版本不受支持');
                break;
            default:
                message.error('不在masg范围内');
                break;
        }
    }
}