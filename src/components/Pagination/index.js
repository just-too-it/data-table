import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPagesArray } from '../../core/utils/pages';
import { registryActions } from '../../store/registrySlice';

export const Pagination = ({ currentPage, pagesCount }) => {
  const dispatch = useDispatch();
  const pagesArray = getPagesArray(pagesCount);
  let [decrementClassName, setDecrementClassName] = useState('pagination__decrement');
  let [incrementClassName, setIncrementClassName] = useState('pagination__increment');

  useEffect(() => {
    if (currentPage > 1 && currentPage < pagesCount) {
      setDecrementClassName('pagination__decrement');
      setIncrementClassName('pagination__increment');
    } else if (currentPage <= 1) {
      setDecrementClassName('pagination__decrement pagination__decrement_disabled');
      setIncrementClassName('pagination__increment');
    } else if (currentPage >= pagesCount) {
      setDecrementClassName('pagination__decrement');
      setIncrementClassName('pagination__increment pagination__increment_disabled');
    }
  }, [currentPage]);

  return (
    <div className="pagination">
      <button
        className={`pagination__button ${decrementClassName}`}
        onClick={() => {
          currentPage > 1 ? dispatch(registryActions.decrementPageNumber()) : null;
        }}
      >
        Назад
      </button>
      <div className="pagination__pages">
        {pagesArray.map((page) => (
          <span
            key={page}
            className={page === currentPage ? 'pagination__page pagination__page_current' : 'pagination__page'}
            onClick={() => dispatch(registryActions.setCurrentPage(page))}
          >
            {`${page} `}
          </span>
        ))}
      </div>
      <button
        className={`pagination__button ${incrementClassName}`}
        onClick={() => {
          currentPage < pagesCount ? dispatch(registryActions.incrementPageNumber()) : null;
        }}
      >
        Далее
      </button>
    </div>
  );
};
