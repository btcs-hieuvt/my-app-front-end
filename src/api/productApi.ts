import { PRODUCT } from '../types'
import axiosClient from './axiosClient'

export class productApi {
  static getAll = async (): Promise<PRODUCT[]> => {
    const response = await axiosClient.get('product/')
    return response.data
  }
  static getProductById = async (id: string): Promise<PRODUCT> => {
    const response = await axiosClient.get(`product/${id}`)
    return response.data
  }
}
