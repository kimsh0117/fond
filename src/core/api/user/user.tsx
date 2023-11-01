import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil';
import { AxiosError } from 'axios'
import { api } from "@/core/http";
import type { User } from './user.d';
import { userPagination } from '@/core/store/users'
/**
 * utils
 */
import getQueries from '@/core/utils/queries'

const userApi = {
  getUsersById: (id: string, page: number, limit: number, isWithTotal: boolean): Promise<User[]> => {
    const queries = getQueries(id, ',')
    return isWithTotal
      ? api.get(`/users${queries}`).then(res => res.data)
      : api.get(`/users${queries}&_start=${page}&_limit=${limit}`).then(res => res.data)
  },
};


export const useUserQuery = {
  useGetUsers: (id: string = '') => {
    const [options] = useRecoilState(userPagination);
    return useQuery<User[], AxiosError>({
      queryKey: ['getUsers', id, options.page, options.limit, false],
      queryFn: () => userApi.getUsersById(id, options.page, options.limit, false),
    })
  },
  useGetUsersTotal: (id: string = '') => {
    const [options] = useRecoilState(userPagination);
    return useQuery<User[], AxiosError>({
      queryKey: ['getUsersTotal', id, options.page, options.limit, true],
      queryFn: () => userApi.getUsersById(id, options.page, options.limit, true),
    })
  },
}