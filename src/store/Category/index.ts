import { atom } from 'recoil'
import { CATEGORY } from '../../types'

export const AllCategory = atom<CATEGORY[]>({
  key: 'ALL_CATEGORY',
  default: [],
})
