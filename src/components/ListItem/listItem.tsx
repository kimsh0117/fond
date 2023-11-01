import { useCallback, MouseEvent, memo } from 'react';
import { useRecoilState } from 'recoil';
import classNames from 'classnames'
/**
 * type
 */
import type { User } from '@/core/api/user/user.d'
/**
 * global state
 */
import { selectedId } from '@/core/store/users';

import styled from './listItem.module.scss'

const ListItem = ({id, username, email}: Pick<User, 'id' | 'username' | 'email'>) => {
  const [selected, setSelectedId] = useRecoilState(selectedId);

  const handleChange = useCallback((e: MouseEvent<HTMLLIElement>) => {
    const data = e.currentTarget.getAttribute('data-id')
    if (data) {
      setSelectedId(parseInt(data))
    }
  }, [])
  
  return (
    <li
      data-id={id}
      onClick={handleChange}
      className={classNames(styled.item, { [styled.selected]: id === selected })}
    >
      <div className={styled.item__image} />
      <div className={styled.item__information}>
        <div className={styled.name}>{username}</div>
        <div className={styled.email}>{email}</div>
      </div>
    </li>
  );
}

export default memo(ListItem)