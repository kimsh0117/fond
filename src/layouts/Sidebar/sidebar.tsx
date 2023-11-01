/**
 * components
 */
import Search from '@/components/Search/search'
import List from '@/components/List/list'
import Pagination from '@/components/Pagination/pagination';
/**
 * styles
 */
import styled from './sidebar.module.scss'

export default function Sidebar() {
  return (
    <aside className={styled.sidebar}>
      <Search />
      <List />
      <Pagination />
    </aside>
  );
}