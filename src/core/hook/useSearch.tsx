import { ChangeEvent, useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
/**
 * api
 */
import { useUserQuery } from '@/core/api/user/user'
/**
 * hooks
 */
import useDebounce from '@/core/hook/useDebounce'
/**
 * global state
 */
import { usersState, selectedId, totalUser } from '@/core/store/users';

export default function useSearch() {
  const [id, setId] = useState('')
  const debouncedId = useDebounce(id, 700)
  const [, setUsers] = useRecoilState(usersState)
  const [, setSelectedId] = useRecoilState(selectedId)
  const [, setTotalUser] = useRecoilState(totalUser)

  // change event from input
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setId(query)
    setSelectedId(null)
  },[])

  // http request users data by ids for update server states
  const { data, isError } = useUserQuery.useGetUsers(debouncedId)
  const { data: totalUsers } = useUserQuery.useGetUsersTotal(debouncedId)
  
  // set users data in client global store state
  useEffect(() => {
    if (Array.isArray(data)) {
    setUsers(data)
    }
  }, [data])
  
  useEffect(() => {
    if (Array.isArray(totalUsers)) {
      setTotalUser(totalUsers)
    }
  }, [totalUsers])

  return {
    isError,
    handleChange
  }
}