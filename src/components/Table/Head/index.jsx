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
        dispatch(registryActions.setSortOrder());
        setHeadClassName(headClassName === 'table__head' ? 'table__head table__head_sorted' : 'table__head');
      }}
    >
      {name}
    </th>
  );
};
