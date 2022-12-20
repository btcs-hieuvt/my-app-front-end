import { CATEGORY } from '../types'
import axiosClient from './axiosClient'

export class categoryApi {
  static getAll = async (): Promise<CATEGORY[]> => {
    const response = await axiosClient.get('category/')
    return response.data
  }
}
