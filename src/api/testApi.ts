import axios from 'axios'
import { API_DEFAULT_REQUEST_HEADERS, BASE_URL } from './config'
import type { FetchResultResponse } from './testApi.types'

const axiosInstance = axios.create({ baseURL: BASE_URL, headers: API_DEFAULT_REQUEST_HEADERS })

export const fetchTestResult = async () => {
  const result = await axiosInstance<FetchResultResponse>({ url: '/people/1/' })

  return result.data
}
