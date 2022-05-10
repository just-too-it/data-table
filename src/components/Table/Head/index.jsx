import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registryActions } from '../../../store/registrySlice';

export const Head = ({ name, sort }) => {
  const dispatch = useDispatch();
  let [headClassName, setHeadClassName] = useState('table__head');

  return (
    <th
      className={headClassName}
      onClick={() => {
        dispatch(registryActions.setSortBy(`${sort}`));
        switch (sort) {
          case 'id':
            dispatch(registryActions.setSortOrderById());
            break;
          case 'title':
            dispatch(registryActions.setSortOrderByTitle());
            break;
          case 'body':
            dispatch(registryActions.setSortOrderByBody());
            break;
          default:
            break;
        }
        setHeadClassName(headClassName === 'table__head' ? 'table__head table__head_sorted' : 'table__head');
      }}
    >
      {name}
    </th>
  );
};
