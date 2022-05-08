import { useDispatch, useSelector } from 'react-redux';

import { registryActions } from '../../store/registrySlice';

export const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.registry.searchQuery);

  return (
    <input
      type="text"
      className="search"
      placeholder="Поиск"
      onChange={(event) => {
        dispatch(registryActions.setSearchQuery(event.target.value));
      }}
      value={searchQuery}
    />
  );
};
