import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import classNames from 'classnames';
/**
 * hook
 */
import usePagination from '@/core/hook/usePagination'
/**
 * global states
 */
import { totalUserLength, userPagination } from '@/core/store/users';
/**
 * components
 */
import Button from '@/components/Button/button';

import styled from './pagination.module.scss';

export default function Pagination() {
  const len = useRecoilValue(totalUserLength);
  const [options, setOptions] = useRecoilState(userPagination);

  const {
    state: { pages },
    setValue,
    ltEnable,
    rtEnable,
  } = usePagination({
    page: options.page,
    limit: options.limit
  });

  useEffect(() => {
    setValue(prev => ({
      ...prev,
      total: len,
    }));
  }, [len]);
  
  useEffect(() => {
    setValue(prev => ({ ...prev, page: options.page }));
  }, [options.page])

  return len > 0 ? (
    <div className={styled.container}>
      <Button
        classes={styled.btn}
        onClick={() => setValue(prev => ({ ...prev, page: prev.page - 1 }))}
        disabled={!ltEnable}
      >
        &lt;
      </Button>
      {pages.map((page, idx) => (
        <Button
          key={idx}
          onClick={() => setOptions(prev => ({...prev, page: page.nr}))}
          classes={classNames(styled.btn, {
            [styled['btn--clicked']]: page.active,
          })}
        >
          {page.ellipsis ? '...' : page.nr}
        </Button>
      ))}
      <Button
        classes={styled.btn}
        onClick={() => setValue(prev => ({ ...prev, page: prev.page + 1 }))}
        disabled={!rtEnable}
      >
        &gt;
      </Button>
    </div>
  ) : null;
}