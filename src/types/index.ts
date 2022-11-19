export type CATEGORY = {
  id: number
  title: string
  image_url: string
}

export type CAROUSEL = {
  id: number
  image: string
  title: string
  description: string
}

export type PRODUCT = {
  _id: string
  productName: string
  price: number
  priceSale?: number
  description: string
  categoryId: string
  listImage: string[]
  createdAt?: string
  updateAt?: string
}
