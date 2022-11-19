import axiosClient from './axiosClient'

const productApi = {
  async getAll() {
    const response = await axiosClient.get('product/')
    return response.data
  },
}

export default productApi
