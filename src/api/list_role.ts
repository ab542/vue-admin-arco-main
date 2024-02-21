import { Options } from '@/types/global'
import axios, { AxiosResponse } from 'axios'
import BASE from './setting.json'

// 定义响应结果类
export interface PolicyRecord {
  roleId: string
  name: string
  description: string
}

// 传的参数
export interface PolicyParams extends Partial<PolicyRecord> {
  pageCurrent: number
  pageSize: number
}

// 响应结果集
export interface PolicyListRes {
  msg: string
  list: PolicyRecord[]
  total: number
  code: number
}

export function queryPolicyList(params: PolicyParams) {
  return axios.post<PolicyListRes>(`${BASE.BASE_URL}role/listPage`, params)
}

export interface ServiceRecord {
  id: number
  title: string
  description: string
  name?: string
  actionType?: string
  icon?: string
  data?: Options[]
  enable?: boolean
  expires?: boolean
}

export function queryInspectionList(): Promise<AxiosResponse<ServiceRecord>> {
  return axios.get('/api/list/quality-inspection')
}

export function queryTheServiceList(): Promise<AxiosResponse<ServiceRecord>> {
  return axios.get('/api/list/the-service')
}

export function queryRulesPresetList(): Promise<AxiosResponse<ServiceRecord>> {
  return axios.get('/api/list/rules-preset')
}
