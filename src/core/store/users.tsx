import { atom, selector } from "recoil"
import type { User } from '@/core/api/user/user.d'

export const usersState = atom<User[]>({
  key: 'users',
  default: []
})

export const selectedId = atom<null | number>({
  key: 'userId',
  default: null
})

export const selectedUser = selector({
  key: 'selectedUser',
  get: ({ get }) => {
    const id = get(selectedId)
    const users = get(usersState)
    
    return users.filter(user => user.id === id)
  }
})

export const totalUser = atom<User[]>({
  key: 'totalUser',
  default: []
})

export const totalUserLength = selector({
  key: 'totalUserLength',
  get: ({ get }) => {
    const users = get(totalUser)

    return users.length
  }
})

export const userPagination = atom({
  key: 'userPagination',
  default: {
    page: 1,
    limit: 2,
  }
})