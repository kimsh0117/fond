import { useRecoilValue, useRecoilState } from 'recoil';
import classNames from 'classnames';
/**
 * global states
 */
import { selectedUser, selectedId } from '@/core/store/users';

import styled from './home.module.scss'
/**
 * components
 */
import Card from '@/components/Card/card';

export default function Home() {
  const user = useRecoilValue(selectedUser)
  const [id] = useRecoilState(selectedId)

  return (
    <div className={classNames(styled.wrapper, {[styled.selected]: id})}>
      {user.length === 0
        ? 'Выберите сотрудника, чтобы посмотреть его профиль'
        : user.map(user => (
          <Card
            name={user.name}
            email={user.email}
            phone={user.phone}
            key={user.id}
          />
          ))}
    </div>
  );
}