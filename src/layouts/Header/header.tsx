import styled from './header.module.scss'

export default function Header() {
  return (
    <nav className={styled.nav}>
      <div className={styled.logo}>Жилфонд</div>
      <div className={styled.right}>Пользователь</div>
    </nav>
  );
}
