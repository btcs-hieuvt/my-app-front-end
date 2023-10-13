import { PRODUCT } from '../types'
import axiosClient from './axiosClient'

export class searchApi {
  static search = async (keywordSearch: string): Promise<PRODUCT[]> => {
    const response = await axiosClient.get(`search?k=${keywordSearch}`)
    return response.data
  }
}
