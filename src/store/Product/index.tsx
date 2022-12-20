import { atom } from 'recoil'
import { PRODUCT } from '../../types'

export const AllProduct = atom<PRODUCT[]>({
  key: 'ALL_PRODUCT',
  default: [],
})

export const KEYBOARDS = atom<string[]>({
  key: 'LIST_KEYBOARD',
  default: [],
})
export const MICE = atom<string[]>({
  key: 'LIST_MICE',
  default: [],
})
export const AUDIO = atom<string[]>({
  key: 'LIST_AUDIO',
  default: [],
})
export const CHAIR = atom<string[]>({
  key: 'LIST_CHAIR',
  default: [],
})
export const CONSOLE = atom<string[]>({
  key: 'LIST_CONSOLE',
  default: [],
})
