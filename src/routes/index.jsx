import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages/Main';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
