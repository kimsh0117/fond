import {memo} from 'react'
import type { User } from '@/core/api/user/user.d'

import styled from './card.module.scss'

const Card = ({name, email, phone}: Pick<User, 'name' | 'email' | 'phone'>) => {
  return (
    <div className={styled.card}>
      <div className={styled.card__image} />
      <div className={styled.card__information}>
        <div className={styled.name}>{name}</div>
        <div className={styled.personal}>
          <span className={styled.strong}>email: </span>
          <span className={styled.text}>{email}</span>
        </div>

        <div className={styled.personal}>
          <span className={styled.strong}>phone: </span>
          <span className={styled.text}>{phone}</span>
        </div>

        <div className={styled.about}>О себе:</div>
      </div>
    </div>
  )
}

export default memo(Card)