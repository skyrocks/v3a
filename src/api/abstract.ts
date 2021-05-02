/**
 * class模式,弃用
 **/
import { message } from 'ant-design-vue'
import { API_BASE } from '@/utils/env'
import { AxiosRequest, CustomResponse } from './types'
import { localStore } from '@/utils/storage'
import instance from './intercept'

class Abstract {
  protected baseURL: string = API_BASE

  protected headers: object = {
    ContentType: 'application/json;charset=UTF-8'
  }

  private apiAxios({
    baseURL = this.baseURL,
    headers = this.headers,
    method,
    url,
    data,
    params,
    responseType
  }: AxiosRequest): Promise<CustomResponse> {
    Object.assign(headers, {
      Authorization: `Bearer ${localStore.get('token')}`
    })
    return new Promise((resolve, reject) => {
      console.log('abstract', instance)
      instance({ baseURL, headers, method, url, params, data, responseType })
        .then(resp => {
          if (resp.status === 200) {
            resolve({
              status: resp.status,
              statusText: resp.statusText,
              origin: resp.data,
              success: resp.data.success,
              data: resp.data?.data,
              message: resp.data?.message
            })
          } else {
            resolve({
              status: resp.status,
              statusText: resp.statusText,
              origin: resp.data,
              success: false,
              message: '',
              data: undefined
            })
          }
        })
        .catch(err => {
          const msg = err?.data?.errorMessage || err?.message || url + '请求失败'
          message.error(msg)
          reject({
            status: 0,
            statusText: err?.data?.errorMessage || err?.message,
            origin: undefined,
            success: false,
            message: '',
            data: undefined
          })
        })
    })
  }

  /**
   * GET类型的网络请求
   */
  protected get({ baseURL, headers, url, data, params, responseType }: AxiosRequest): Promise<CustomResponse> {
    return this.apiAxios({ baseURL, headers, method: 'get', url, data, params, responseType })
  }

  /**
   * POST类型的网络请求
   */
  protected post({ baseURL, headers, url, data, params, responseType }: AxiosRequest): Promise<CustomResponse> {
    return this.apiAxios({ baseURL, headers, method: 'post', url, data, params, responseType })
  }
}

export default Abstract
