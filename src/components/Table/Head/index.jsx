import { useDispatch } from 'react-redux';

import { registryActions } from '../../../store/registrySlice';

export const Head = ({ name, sort }) => {
  const dispatch = useDispatch();

  return (
    <th
      className="table__head"
      onClick={() => {
        dispatch(registryActions.setSortBy(`${sort}`));
        dispatch(registryActions.setSortOrder());
      }}
    >
      {name}
    </th>
  );
};
