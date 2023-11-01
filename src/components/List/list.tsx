import { useRecoilState } from 'recoil';
/**
 * global state
 */
import { usersState } from '@/core/store/users';
/**
 * components
 */
import ListItem from '@/components/ListItem/listItem';

import styled from './list.module.scss';

export default function List() {
  const [users] = useRecoilState(usersState);
  return (
    <div>
      <div className={styled.label}>Результаты</div>
      <ul className={`${styled.text} ${styled.list}`}>
        {users.length === 0
          ? 'начните поиск'
          : users.map(user => (
              <ListItem
                key={user.id}
                id={user.id}
                username={user.username}
                email={user.email}
              />
            ))}
      </ul>
    </div>
  );
}
